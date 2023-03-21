import { useMemo, useRef, useState } from "react";

const UseMemoF8 = () => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [producsts, setProducst] = useState([])

    const nameRef = useRef()

    const handleAdd = () => { 
        
      if(name.trim()){
          // ADD thêm sản phẩm và chứa thông tin sản phẩm.
          setProducst([...producsts, {
            name,   
            price: +price
        }])
        setName('')
        setPrice('')
      }
        // focus lại mỗi khi nhấn ADD
        nameRef.current.focus()
    }
    console.log(producsts)
    const total = useMemo(() => {
        // tính tổng giá tiền của các sản phẩm trong mảng producsts.
        const result = producsts.reduce((result, prod) => {
            console.log('tinh toan lai.....')
            return result + prod.price
        }, 0)

        return result
    }, [producsts])

    const handleEnter = (e) => {
        if(e.which === 13) {
            handleAdd()
        }
    }

    return (
        <>
            <div style={{ padding: '30px' }}>
                <input
                    ref={nameRef}
                    value={name}
                    placeholder='enter name ...'
                    onChange={e => setName(e.target.value)}
                />

                <input
                    onKeyDown={handleEnter}
                    value={price}
                    placeholder='enter price ...'
                    onChange={e => setPrice(e.target.value)}
                /><br/>
                <button onClick={handleAdd}>ADD</button> <br/>
                <p>Total: {total} VND</p>
                <ul>
                    {producsts.map((producst, index ) => (
                        <li key={index}>{producst.name} + {producst.price} VND</li>
                    ) )}
                </ul>
            </div>
        </>
    )
}

export default UseMemoF8;