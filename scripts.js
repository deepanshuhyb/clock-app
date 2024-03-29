const canvas = document.getElementById('canvas');


function clock() {
    const now = new Date();
    const ctx = canvas.getContext('2d');





    ctx.save();
    ctx.clearRect(0,0,500,500);
    ctx.translate(250,250); //put 00 in the middle ass we took 500 500 in the rect
    ctx.rotate(-Math.PI/2); //for rotating -90 deg




    ctx.strokeStyle = '#000000';
    ctx.fillStyle = '#f4f4f4';
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';

    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 14;
    ctx.strokeStyle = '#800000';
    ctx.arc(0 , 0 , 142 , 0 ,Math.PI*2, true);
    ctx.stroke();
    ctx.fill();
    ctx.restore();

    //drawing hour lines
    ctx.save();
    for(let i = 0; i<12; i++){
        ctx.beginPath();
        ctx.moveTo(100,0);
        ctx.lineTo(120,0);
        ctx.stroke();
        ctx.rotate(Math.PI/6)
    }
    ctx.restore();


        //drawing minutes lines
        ctx.save();
        ctx.lineWidth = 4;
            for(let i = 0; i<60; i++){
                if (i % 5 !== 0) {
            ctx.beginPath();
            ctx.moveTo(117,0);
            ctx.lineTo(120,0);
            ctx.stroke();   
                }
            ctx.rotate(Math.PI/30)
        }
        ctx.restore();



        //get current time
        const hr = now.getHours() % 12;
        const min = now.getMinutes();
        const sec = now.getSeconds();

        // draw hour hand
        ctx.save();
        ctx.rotate((Math.PI/6) * hr + (Math.PI/360) *min + (Math.PI/21600)* sec);
        ctx.strokeStyle = '#800000';
        ctx.lineWidth = 12;
        ctx.beginPath();
        ctx.moveTo(-20, 0);
        ctx.lineTo(85, 0);
        ctx.stroke();
        ctx.restore();

    // draw min hand
    ctx.save();
    ctx.rotate((Math.PI/30) *min + (Math.PI/1800)* sec);
    ctx.strokeStyle = '#800000';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(-28, 0);
    ctx.lineTo(112, 0);
    ctx.stroke();
    ctx.restore();


    // draw sec hand
    ctx.save();
    ctx.rotate((Math.PI/30)* sec);
    ctx.strokeStyle = '#FF7F50';
    ctx.fillStyle = '#FF7F50';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(-30, 0);
    ctx.lineTo(125, 0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0,0, 10, 0 ,Math.PI*2, true);
    ctx.fill();
    ctx.restore();








    ctx.restore();
    requestAnimationFrame(clock);

}
requestAnimationFrame(clock);


document.getElementById('save-btn').addEventListener('click', ()=>{
    const dataUrl = canvas.toDataURL('image/png');

    const link = document.createElement('a');
    link.download = 'clock.png';
    link.href = dataUrl;
    link.click();
});