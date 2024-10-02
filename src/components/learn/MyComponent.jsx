//arrow function:  () => { }
//component = html + css + js
//trong React: component la 1 cach de thao tac voi html
// --> viet MyComponent duoi dang tag
// Ten component phai viet hoa


//1) dat ten JSX code react voi javascript
//2) JSX: la cong nghe giup dich code react (hmtl + js)
//JSX: cong nghe giúp tu dich code html, dich javascrip bien thanh html

import './style.css';
const MyComponent = () => {
    // trong arrow function phai return va tra ra html

    //const hoidanit = "huy"; //string
    //const hoidanit = 49; //number
    //const hoidanit = true; //boolean --> ko in ra gia tri gi
    //const hoidanit = undefined; // --> ko in ra gia tri gi
    //const hoidanit = null; // --> ko in ra gia tri gi
    //const hoidanit = [1, 2, 3]
    const hoidanit = {
        name: "Huy",
        age: 20
    }

    return (
        // 0) JSX chi co 1 parent --> fragment de fix
        // 1) Chi tra ra 1 phan tu duy nhat ben trong JSX
        // 2) Dung fragment: ko render thua thai html div
        <>
            {/* <div> {hoidanit.name} & first react</div> */}
            {/* dung JSON.stringify de bien 1 bien object hay array thanh chuoi */}
            <div>{JSON.stringify(hoidanit)} & first react</div>
            <div>{console.log("test log thu")}</div>
            <div className="child"
                // du dung inline style
                style={ // dau nhay doi thu 1: muon code javascript ben trong html
                    { borderRadius: "10px" } // dau nhay doi thu 2 tuong trung cho object
                }
            >child</div>
        </>
    );
}

// dùng default: file này chi suat ra 1 bien la MyComponent
export default MyComponent;