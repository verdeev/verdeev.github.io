const snippets = {
    BOARD1: 'S29ucmFkIE5hcmVpa2U=',
    BOARD2: 'QXJtaW4gRmVyZGluYW5kIFdlbGxz',
    BOARD3: 'Sm9uYXMgS3JvaG4=',
    MAIL: 'aGFsbG9AdmVyZGUtZXYuZGU=',
    PGPK: 'LS0tLS1CRUdJTiBQR1AgUFVCTElDIEtFWSBCTE9DSy0tLS0tDQoNCnhqTUVaYy9nZXhZSkt3WUJCQUhhUnc4QkFRZEE1cVoxdGtvb1hVY0pCOEV1RmVTOE43QnNJT1BaQnJnQzVkaDINCldJRjBCaXZOSDFabGNrUkZJR1V1SUZZdUlEeG9ZV3hzYjBCMlpYSmtaUzFsZGk1a1pUN0NpUVFURmdnQU1SWWgNCkJFSmxpdSttVHlnbG43SkxqZmZFSXBHZ3RGbUtCUUpseitCN0Foc0RCQXNKQ0FjRkZRZ0pDZ3NGRmdJREFRQUENCkNna1E5OFFpa2FDMFdZcExEd0VBMTMvTXYwVFBzdkxjNWVESG1xc3Urd1BhYUpDbmlYR0hEc0pLaEtTNmI1MEINCkFMZGlscEcwaUNyQlZZQXRXbWFiZHdPMU1aTGlubWg0VTIvK1ZBMzBaUzhMempnRVpjL2dmQklLS3dZQkJBR1gNClZRRUZBUUVIUUxNY3o2b1JCRG8zOWNEOG94OWg3Yklnc3Z4UkFkcXpPazB0TkpNU0pSOG1Bd0VJQjhKNEJCZ1cNCkNBQWdGaUVFUW1XSzc2WlBLQ1dmc2t1Tjk4UWlrYUMwV1lvRkFtWFA0SHdDR3d3QUNna1E5OFFpa2FDMFdZcjkNCjJnRC9hRml5N1dYVEJ5bjRjSzBhUHhtcDRoZkJXSGwyYXpSaXRDL0JUUC9BRU1RQS9SZi9OOVhDQ2IzR3R5djANCnJ2YlpZTXdKdUkyZTY2akVEZUUwMVF6L0IyUUwNCj1uUXp2DQotLS0tLUVORCBQR1AgUFVCTElDIEtFWSBCTE9DSy0tLS0tDQo=',
};

window.onload = () => {
    const board1 = document.getElementById('BOARD1');
    const board2 = document.getElementById('BOARD2');
    const board3 = document.getElementById('BOARD3');
    const mail = document.getElementById('MAIL');
    const pgpk = document.getElementById('PGPK');
    board1.innerText = atob(snippets.BOARD1);
    board2.innerText = atob(snippets.BOARD2);
    board3.innerText = atob(snippets.BOARD3);
    mail.innerText = atob(snippets.MAIL);
    mail.href = 'mailto:' + atob(snippets.MAIL);
    pgpk.href = 'data:application/pgp-keys;base64,' + snippets.PGPK;
}