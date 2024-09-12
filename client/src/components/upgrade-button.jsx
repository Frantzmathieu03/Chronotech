// import React from 'react';

const UpgradeButton = () => {
    const handleUpgrade = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch('/api/user/upgrade', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Upgrade failed');
            }

            alert('Upgrade successful!');
        } catch (error) {
            console.error('Upgrade failed:', error);
        }
    };

    return (
        <button onClick={handleUpgrade}>Upgrade Plan</button>
    );
};

export default UpgradeButton;