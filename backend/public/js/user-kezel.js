async function torles(id) {
    console.log(id);
    
    const response = await fetch(`/api/users-backend/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        window.alert('Sikeres felhasználó törlés!');
        window.location.href = '/api/users-backend';
    }
}
