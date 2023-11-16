


function Box1(props){

    return <>
    <div className=" rounded" style={{borderWidth:'1px',borderColor:'#dddddd',padding:'20px',borderStyle:'solid',marginTop:'5px',marginBottom:'5px'}}>
    
    {props.children}
    </div>
    </>
    }
    
    export default Box1;