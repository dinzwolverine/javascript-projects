const quote = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "The best way to predict the future is to invent it. - Alan Kay",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "The way to get started is to quit talking and begin doing. - Walt Disney"
];

const Usedindex = new Set();

function generateQuote(){
    if(Usedindex.size >= quote.length){
        Usedindex.clear();
    }
    while(true)
    {
        const randomIndex = Math.floor(Math.random() * quote.length);

        if(Usedindex.has(randomIndex)) continue
            {
            document.getElementById("quote").innerText = quote[randomIndex];
        Usedindex.add(randomIndex);
        break;
        }
    }
}

generateQuote();