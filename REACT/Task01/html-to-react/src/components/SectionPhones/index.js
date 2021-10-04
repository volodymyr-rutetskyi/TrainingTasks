import React from "react";
import phone1 from '../../static/Lingua phone 1.png'
import phone2 from '../../static/Lingua phone 2.png'
import phone3 from '../../static/Lingua phone 3.png'
import phone4 from '../../static/Lingua phone 4.png'
import phone5 from '../../static/Lingua phone 5.png'

export default function () {
  const phones = [phone1, phone2, phone3, phone4, phone5]

  return (
    <div style={{height: "720px", background:"darkcyan", display:"flex", alignItems:"center"}}>
      <div style={{display:"flex", justifyContent:"space-around", width: "100%", height: "70%"}}>
        {phones.map(p => <img style={{padding: 0}} src={p} alt={p} />)}
      </div>
    </div>
  );
}
