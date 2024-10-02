//arrow function:  () => { }
//component = html + css + js
//trong React: component la 1 cach de thao tac voi html
// --> viet MyComponent duoi dang tag
// Ten component phai viet hoa

//JSX: cong nghe giúp tu dich code html, dich javascrip bien thanh html

import './style.css';
const MyComponent = () => {
    // trong arrow function phai return va tra ra html
    return (
        // 0) JSX chi co 1 parent --> fragment de fix
        // 1) Chi tra ra 1 phan tu duy nhat ben trong JSX
        // 2) Dung fragment: ko render thua thai html div
        <>
            <div>huy & first react</div>
            <div className="child"
                style={
                    { borderRadius: "10px" }
                }
            >child</div>
        </>
    );
}

// dùng default: file này chi suat ra 1 bien la MyComponent
export default MyComponent;