function Random(props) {
    return (
         <div className="container">
            <p> Random value betwen {props.min} and {props.max} = &gt;{getRandomInRange(props.min, props.max)}</p>
        </div>
    );


}
function getRandomInRange(min, max) {
    // 确保 min 和 max 是整数
    min = Math.ceil(min);
    max = Math.floor(max);
    
    // 生成 min 和 max 之间的随机整数（包括 min 和 max）
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
export default Random;