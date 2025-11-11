async function modosit(event, id) {
    event.preventDefault();
    const nev = document.querySelector('#nev').value;
    const email = document.querySelector('#email').value;
    const jelszo = document.querySelector('#jelszo').value;
    const kep = document.querySelector('#kep').value;

    const response = await fetch(`/api/user-backend/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nev,
            email,
            jelszo,
            kep,
        }),
    });

    if (response.ok) {
        const resp = await response.json();
        window.alert(resp.msg);
        window.location.href = '/api/user-backend';
    }
}
