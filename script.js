function calculateAge() {
    const birthDate = document.getElementById('birthDate').value;
    if (birthDate) {
        const birthDateObj = new Date(birthDate);
        const currentDate = new Date();
        
        let age = currentDate.getFullYear() - birthDateObj.getFullYear();
        const monthDifference = currentDate.getMonth() - birthDateObj.getMonth();
        
        if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDateObj.getDate())) {
            age--;
        }
        
        document.getElementById('result').textContent = `You are ${age} years old.`;
    } else {
        document.getElementById('result').textContent = 'Please enter a valid birthdate.';
    }
}
