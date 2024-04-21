import { useState, useEffect } from 'react';

const URL_RANDOM_AVATAR = 'https://api.minimalavatars.com/avatar/random/png';

const styles = {
    card: {
        width: '350px',
        height: '400px',
        backgroundColor: '#C4F9E9',
        borderRadius: '10px',
        textAlign: 'center',
        padding: '5px',
    },
    avatarImage: {
        width: '150px',
        height: '150px',
    },
    description: {
        fontSize: '14px',
        color: '#000000',
        textAling: 'left',
    },
    numberImage: {
        fontSize: '12px',
        color: '#555',
    },
};

export function Cards(){
    const [avatarUrl, setAvatarUrl] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        fetchRandomAvatar();
    }, []);

    const fetchRandomAvatar = () => {
        const randomNumber = Math.floor(Math.random() * 100);
        setAvatarUrl(`${URL_RANDOM_AVATAR}?${Date.now()}`);
        setDescription(`Avatar ${randomNumber}`);
    };

    return (
        <div style={styles.card}>
        <h1>Random Image</h1>
        <img 
            style={styles.avatarImage}
            src={avatarUrl}
            alt="Card"
            onClick={fetchRandomAvatar}
        />
        <hr style={{ width: '100%', margin: '5px 0' }} />
        <h3 style={{textAlign: 'left'}}> Descripcion: </h3>
        <p style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, architecto sed quae quos facilis.</p>
        <p style={styles.numberImage}>{description}</p>
        </div>
    );
};
