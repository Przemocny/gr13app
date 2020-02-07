import React from 'react'

// komponent funkcyjny
// funkcja która zwraca "html/jsx"

// deklaracja komponentu
function AppSection(props) {
  const { title="Default Title", counter, isActive, showAlertProp, data, arr } = props
  console.log('props', props)

	return (
    <section className='attention'>
      <div className='wrapper'>
        {isActive && <h3>is active</h3>}

        <h1>{title}</h1>
        <h2>{counter}</h2>
        {isActive === true  ? <h3>is active</h3> : <h4>not active</h4>} 

        <h4>{JSON.stringify(data)}</h4>
 
        {arr.map((element, key)=>{
          return <h3 key={key}>{element}</h3>
        })}
     
      </div>
		</section>
	)
}


function showAlert(){
  alert('test')
}

function HomePage() {
  return (<div className='app'>
    {/* wywołanie tego komponentu */}
    <AppSection title={'test'} 
    isActive={true} counter={1} 
    showAlertProp={showAlert}
      data={{'key':0}}
      arr={[0,1,"test",3,4]}
    />
    {/* wywołanie tego komponentu - ver 2 */}
   
  </div>)
}

export default HomePage
