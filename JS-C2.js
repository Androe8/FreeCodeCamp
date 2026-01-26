function maskEmail(email) {
    const [localPart, domain] = email.split('@');
    const maskedLocal = localPart.length <= 2
        ? localPart[0] + '*'.repeat(localPart.length - 1)
        : localPart[0] + '*'.repeat(localPart.length - 2) + localPart[localPart.length - 1];
    return `${maskedLocal}@${domain}`;  
}
console.log(maskEmail("andres.arroyo955@pasucal"))

// You will see the information about every lab on the LabsContext folder.

function maskEmail(email) {
    const indexOfAt = email.indexOf('@');
    const emailName = email.slice(0, indexOfAt);
    const emailDomain = email.slice(indexOfAt);
    
    const firstChar = emailName[0];
    const lastChar = emailName[emailName.length - 1];
    const maskedSection = '*'.repeat(emailName.length - 2);
    return `${firstChar}${maskedSection}${lastChar}${emailDomain}`;
}
console.log(maskEmail("andres.arroyo955@pasucal"))

// I did two funcions to show you two different ways to solve the same problem.