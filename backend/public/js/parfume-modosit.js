async function modosit(event, id) {
    event.preventDefault();
    const marka = document.querySelector('#marka').value;
    const nev = document.querySelector('#nev').value;
    const fajta = document.querySelector('#fajta').value;
    const ar = document.querySelector('#ar').value;
    const kedvezmeny = document.querySelector('#kedvezmeny').value;
    const kep = document.querySelector('#kep').value;

    const response = await fetch(`/api/parfumes-backend/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            marka,
            nev,
            fajta,
            ar,
            kedvezmeny,
            kep,
        }),
    });

    if (response.ok) {
        const resp = await response.json();
        window.alert(resp.msg);
        window.location.href = '/api/parfumes-backend';
    }
}
