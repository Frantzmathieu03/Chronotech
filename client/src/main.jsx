import ReactDOM from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider, gql, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './app';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import TodoList from './pages/todoList';





const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

const token = localStorage.getItem('token');

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


// client
//   .query({
//     query: gql`
//     query User {
//       users {
//         id
//         firstName
//         lastName
//         email
//         password
//       }
//     }
//     `,
//   })
//   .then((result) => console.log(result));

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App token={token}/>,
    children: [
      {
        index: true,
        element: <Dashboard token={token}/>,
      },
      {
        path: '/Login',
        element: <Login />,
      },
      {
        path: '/SignUp',
        element: <SignUp />,
      },
      {
        path: '/TodoList',
        element: <TodoList token={token}/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
 <RouterProvider router={router} />
  </ApolloProvider>
 
);
