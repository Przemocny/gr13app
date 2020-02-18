import React from 'react'


class Form extends React.Component{

    state = {
        email:'przemyslaw.jozwiakowski@gmail.com',
        password:'testerzy123',
        agreement: false
    }

    onInputChange = (event)=>{
        const {value, type, name, checked} = event.target
        // console.log(type, name, value, checked)
        if(type === 'checkbox'){
            this.setState({ [name]: checked  })
        }
        else{
            this.setState({ [name]: value  })
        }
    }

    isFormValidCorrectly = ()=>{
        let isFormValid = false
        const {email, password, agreement} = this.state

        const [user, domain] = email.split('@')
        const [address, addressEnding] = domain.split('.')

        // czy email jest emailem poprawnym
        const conditionEmailFirst = addressEnding !== undefined
        const conditionEmailSecond = [2,3,4].includes(addressEnding.length)
        const conditionEmailThird = Number.isNaN(Number(addressEnding))

        // czy hasło ma min 8 znaków
        const conditionPasswordFirst = password.length >= 8

        // czy checkbox jest true
        const conditionAgreementFirst = agreement === true

        // czy array z warunkami nie zawiera false
        isFormValid = ![conditionEmailFirst, conditionEmailSecond, conditionEmailThird,
            conditionPasswordFirst, conditionAgreementFirst].includes(false)

        return isFormValid
    }

    onSubmitForm = (event)=>{
        event.preventDefault()

        if(this.isFormValidCorrectly()){

            console.log('onSubmit - ajax', this.state)
        
            setTimeout(()=>{
                this.setState({
                    email:'',
                    password:'',
                    agreement: false
                })
            }, 333)
        }
        else{
            alert('zle dane formularza')
        }


    }

    render(){
        const {email, password, agreement} = this.state
        return (
            <div className="form-wrapper">
                <form onSubmit={this.onSubmitForm}>
                    <input type="email" placeholder="your email" name="email" 
                        onChange={this.onInputChange} value={email}/>
                    <input type="password" placeholder="your password" name="password"  
                        onChange={this.onInputChange} value={password}/>
                    <input type="checkbox" name="agreement"  
                        onChange={this.onInputChange} checked={agreement}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}


// text
// email
// checkbox
// radio
// password
// input[type=submit] == button 
// range 
// number
// date
// select + option
// textarea


export default Form