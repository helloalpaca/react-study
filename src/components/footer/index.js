import React from 'react';

function Footer() {
  return (
    <footer className="py-4 bg-light mt-auto">
      <div className="container-fluid px-4">
        <div className="d-flex align-items-center justify-content-between small">
          <div className="text-muted">Copyright &copy; HELLOALPACA</div>
          <div>
            <a
              className="text-muted text-decoration-none"
              href="/privacypolicy"
            >
              개인정보처리방침
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
