function bitcoin(input){
    let i = 0;
    let gold= Number(input[i]);
    i++
    let goldMon = 0;
    let dayBuy = 0;
    let bitcoin = 0;
    let days = 0;
  
    for(a=1; a<=input.length ; a++){
     days++
     if (days%3===0){
         gold= 0.70* gold
     }
     goldMon= goldMon+ (gold * 67.51)
     while(goldMon>=11949.16){
 if(bitcoin===0){
     dayBuy= days}
 goldMon-=11949.16
 bitcoin++
     }
     gold= (input[i]);
    i++
    }
    console.log(`Bought bitcoins: ${bitcoin}`);
    if(bitcoin>0){
     console.log(`Day of the first purchased bitcoin: ${dayBuy}`);
    }
    console.log(`Left money: ${goldMon.toFixed(2)} lv.`);
 }