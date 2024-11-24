import SmallButton from "./SmallButton";
import AddScore from "./AddScore";
import classes from "./smallButton.module.css";


    const Occupational = ({data}) => {
        console.log('occ Data' + data)
        let last = false
        if(!data[0].attrbutes){
            last = true
        }
        return (
            <ul className={classes.row}>
              {data.map(({ name, attrbutes,id}) => (       
                <li key={name}>
                  <SmallButton color='pink' name={name} key={name} />
                  {last && <AddScore id={id} type='occu'/>}
                  {console.log('attrbutes' + attrbutes)}
                  {!last && <Occupational data={attrbutes} />}
                </li>
              ))}
            </ul>)
    }

    export default Occupational
    