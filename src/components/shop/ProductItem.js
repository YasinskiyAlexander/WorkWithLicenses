/**
* MIT License
*
* Copyright (c) 2023 Yasinskyi
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
import styles from "./ProductItem.module.css"
import {useState} from "react";

function ProductItem(props) {
    const [isActive,setActive] = useState(false)
    function handleToggle(){
        setActive(!isActive);
    }
    return (
        <div className={styles.listItem}>
            <svg onClick={handleToggle} className={isActive ? styles.heart + " " + styles.checked : styles.heart} viewBox="-1 0 26 26">
                <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/>
            </svg>
            <img className={styles.productImg} src={props.product.image} alt={props.product.name}/>
            <p className={styles.productName}>{props.product.name}</p>
            <p className={props.product.sale != false ? styles.lineThrough : styles.textBold}>{props.product.price}</p>
            {props.product.sale != false ? <p className={styles.sale}>{props.product.sale}</p> :
                props.product.exist !== true ? <p className={styles.noExist}>Немає в наявності</p> : false}
        </div>
    )
}

export default ProductItem;