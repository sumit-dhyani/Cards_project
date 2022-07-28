export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
        <a className="navbar-brand" href="#">
            YourChallenge
          </a>
        <div className="">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link bd " aria-current="page" href="#">
                Product
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="#">
                Download
              </a>
            </li>
            <li class="nav-item s">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
          </div>
          </div>
      </nav>
    </>
  );
}
