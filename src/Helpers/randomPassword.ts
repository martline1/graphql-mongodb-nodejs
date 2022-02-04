const randomPassword = (): string => {
    const randomPart: string = Math.random().toString(36).slice(-8);
    const allNumbers: string = "0123456789";
    const allLetters: string = "abcdefghijklmnopqrstuvwxyz";

    const singleLetter1: string = allLetters[Math.floor(Math.random() * allLetters.length)];
    const singleLetter2: string = allLetters[Math.floor(Math.random() * allLetters.length)];
    const singleNumber: string  = allNumbers[Math.floor(Math.random() * allNumbers.length)];

    return singleLetter1.toUpperCase() + singleLetter2 + randomPart + singleNumber;
};

export default randomPassword;