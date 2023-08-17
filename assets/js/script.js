const snippets = {
    BOARD1: 'S29ucmFkIE5hcmVpa2U=',
    BOARD2: 'QXJtaW4gRmVyZGluYW5kIFdlbGxz',
    BOARD3: 'Sm9uYXMgS3JvaG4=',
    MAIL: 'aGFsbG9AdmVyZGUtZXYuZGU='
};

window.onload = () => {
    const board1 = document.getElementById('BOARD1');
    const board2 = document.getElementById('BOARD2');
    const board3 = document.getElementById('BOARD3');
    const mail = document.getElementById('MAIL');
    board1.innerText = atob(snippets.BOARD1);
    board2.innerText = atob(snippets.BOARD2);
    board3.innerText = atob(snippets.BOARD3);
    mail.innerText = atob(snippets.MAIL);
    mail.href = 'mailto:' + atob(snippets.MAIL);
}