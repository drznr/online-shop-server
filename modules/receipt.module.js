const fs = require('fs');
const path = require('path');

const receiptModule = {
    saveReceipt: async (data) => {
        let receiptText = "";
        for (let i = 0; i < data.length; i++) {
            receiptText += `${data[i].name}: ${data[i].quantity}pcs * ${data[i].finalPrice / data[i].quantity}$ = ${data[i].finalPrice}$.\n`;
        }
        let totalPrice = data.map(item=> item.finalPrice);
        totalPrice = totalPrice.reduce((a, b) => { return a + b }, 0);

        receiptText += `\n\n\nTotal Price: ${totalPrice}$.`;
        let timeStamp = new Date().getTime();
        let relativePath = '/receipts/receipt0' + timeStamp + '.txt';
        let filePath = path.join(__dirname, '../public/receipts/receipt0' + timeStamp + '.txt');       
      await fs.appendFileSync(filePath, receiptText, 'utf8', (err) => {
            if (err) {
                return err;
            }
        });
        return relativePath;
    },
}

module.exports = receiptModule;