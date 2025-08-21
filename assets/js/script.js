const snippets = {
    BOARD1: 'RmVsaXggRnJpZWRyaWNoIEtvY2g=',
    BOARD2: 'TmlscyBKYWt1YnppY2s=',
    BOARD3: 'R2Vyb21lIFF1YW50bWV5ZXI=',
    MAIL: 'aGFsbG9AdmVyZGUtZXYuZGU=',
    MAILTO_C1: 'bWFpbHRvOmhhbGxvQHZlcmRlLWV2LmRlP3N1YmplY3Q9QW50cmFnJTIwYXVmJTIwZmluYW56aWVsbGUlMjBVbnRlcnN0JUMzJUJDdHp1bmclMjBFbmdsaXNjaC1aZXJ0aWZpa2F0JmJvZHk9SGFsbG8lMjBsaWViZXIlMjBWZXJERSUyQyUwRCUwQSUwRCUwQWljaCUyMHclQzMlQkNyZGUlMjBtaWNoJTIwZnJldWVuJTJDJTIwd2VubiUyMGlociUyMG1pY2glMjBiZWklMjBkZW4lMjBLb3N0ZW4lMjBmJUMzJUJDciUyMGRhcyUyMEVuZ2xpc2NoLVplcnRpZmlrYXQlMjB1bnRlcnN0JUMzJUJDdHplbiUyMGslQzMlQjZubnRldC4lMEQlMEElMEQlMEElNUJXRU5OJTIwRFUlMjBXRUlURVJFJTIwQU5NRVJLVU5HRU4lMjBIQVNUJTJDJTIwR0lCJTIwU0lFJTIwR0VSTkUlMjBISUVSJTIwQU4lNUQuJTBEJTBBJTBEJTBBVmllbGUlMjBHciVDMyVCQyVDMyU5RmUlMkMlMEQlMEElNUJERUlOJTIwTkFNRSU1RA==',
};

window.onload = () => {
    const board1 = document.getElementById('BOARD1');
    const board2 = document.getElementById('BOARD2');
    const board3 = document.getElementById('BOARD3');
    const mail = document.getElementById('MAIL');
    const mail_c1 = document.getElementById('MAIL_C1');
    if (board1 !== null) board1.innerText = atob(snippets.BOARD1);
    if (board2 !== null) board2.innerText = atob(snippets.BOARD2);
    if (board3 !== null) board3.innerText = atob(snippets.BOARD3);
    if (mail !== null) {
        mail.innerText = atob(snippets.MAIL);
        mail.href = 'mailto:' + atob(snippets.MAIL);
    }
    if (mail_c1 !== null) {
        mail_c1.innerText = atob(snippets.MAIL);
        mail_c1.href = atob(snippets.MAILTO_C1);
    }
}
