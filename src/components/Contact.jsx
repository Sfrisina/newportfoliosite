import React, {forwardRef} from 'react'

const Contact = (props, ref) => {

    const [formStatus, setFormStatus] = React.useState('Send Message')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <>
    <div ref={ref} id={'contactSect'} className="section-head-contact">
    <h2 id='contact-title'>Contact</h2>

    <div className="contact-form">
      <form onSubmit={onSubmit}>
        <div className='contact-info-1'>
        <div className="name-form">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="name-form">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        </div>
        <div className='contact-info-2'>
        <div className="name-form">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control message" id="message" required />
        </div>
        <div className='button-container'>
        <button className="btn-submit btn-danger" type="submit">
          {formStatus}
        </button>
        </div>
        </div>
      </form>
    </div>
    </div>
    </>
  )
}

export default forwardRef(Contact)