async function letrehoz(event) {
    event.preventDefault();
    const marka = document.querySelector('#marka').value;
    const nev = document.querySelector('#nev').value;
    const fajta = document.querySelector('#fajta').value;
    const ar = document.querySelector('#ar').value;
    const kedvezmeny = document.querySelector('#kedvezmeny').value;
    const kep = document.querySelector('#kep').value;
    console.log({
        marka,
        nev,
        fajta,
        ar,
        kedvezmeny,
        kep,
    });

    const response = await fetch('/api/new-parfume', {
        method: 'POST',
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

    console.log(response);
    const resp = await response.json();

    if (response.ok) {
        window.alert(resp.msg);
        window.location.href = '/api/parfumes-backend';
    } else {
        console.log(resp.msg);
    }
}
