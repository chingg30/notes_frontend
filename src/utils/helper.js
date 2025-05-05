export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const getInitials = (name) => {
    if (!name) return "";

    const words = name.split(" ");  // Fixed the syntax here
    let initials = "";

    for (let i = 0; i < Math.min(words.length, 2); i++) {  // Fixed the syntax here
        initials += words[i][0];  // Fixed the syntax here
    }

    return initials.toUpperCase();  // Fixed the function name here
};