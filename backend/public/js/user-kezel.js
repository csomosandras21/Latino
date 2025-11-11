async function torles(id) {
    const response = await fetch(`/api/user-backend/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        window.alert('Sikeres felhasználó törlés!');
        window.location.href = '/api/user-backend';
    }
}
