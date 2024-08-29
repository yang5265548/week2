function Greetings(props) {
    return (
         <div className="container">
            <p> {switchLa(props.lang)} {props.children}</p>
        </div>
    );


}
function switchLa(lang) {
    let trslat = null;
    switch (lang) {
      case 'fi':
          trslat='Hei'
          return trslat
        break;
      case 'de':
        trslat='Hallo'
        return trslat
        break;
      case 'en':
        trslat='Hello'
        return trslat
        break;
      case 'es':
        trslat='Hola'
        return trslat
        break;
      case 'fr':
        trslat='Bonjour'
        return trslat
        break;
      default:
        trslat='你好'
        return trslat
        break;
    }
  
  }

export default Greetings;