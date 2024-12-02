document.getElementById('check').addEventListener('click', checkPalindrome);

function checkPalindrome(){
    const input = document.getElementById('input').value;
    const reversed = input.split('').reverse().join('');
    if(input === reversed){
        alert('Palindrome');
    } else {
        alert('Not a Palindrome');
    }
}

input.value = '';   