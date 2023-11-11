function validEmail(str) {
  //your JS code here.
	if (!email || email.length > 10^6) {
        return false;
    }

    const emailParts = email.split('@');
    if (emailParts.length !== 2) {
        return false;
    }

    const [localPart, domain] = emailParts;
    if (!localPart || !domain) {
        return false;
    }

    if (localPart.length > 64) {
        return false;
    }

    const domainParts = domain.split('.');
    if (domainParts.length < 2) {
        return false;
    }

    for (let i = 0; i < domainParts.length; i++) {
        const domainPart = domainParts[i];
        if (!domainPart || domainPart.length > 63) {
            return false;
        }
    }

    return true;
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
