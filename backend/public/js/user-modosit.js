async function modosit(event, id, nev, email, admi) {
    event.preventDefault();
    try {
        const adminok = document.getElementsByName(admi);
            let admin = '';
            if (adminok[0].checked) admin = adminok[0].value;
            else admin = adminok[1].value;
        console.log(id, nev, email, admin);
    
        const response = await fetch(`/api/users-backend/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nev,
                email,
                admin,
            }),
        });
    
        if (response.ok) {
            const resp = await response.json();
            window.alert(resp.msg);
            window.location.href = '/api/users-backend';
        }
    } catch (error) {
        console.log(error.message);
    }
}
