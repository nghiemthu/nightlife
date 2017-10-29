import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className='none-margin'>
        <div className="container">
          <div className="row ">
            <div className="col-lg-8 col-md-10 mx-auto">
              <a href="#" className="">Linkedin </a>
               | 
              <a href="#" className=""> GitHub</a>
              <p className="copyright text-muted">Copyright &copy; Thu Nghiem 2017</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;