import React from 'react'

export default function About() {
  return (
    <div>
      <section id="about">
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-md-6">
                    <img src="/assests/about.jpg" alt="" className="w-75 mt-5"/>
                </div>
                <div className="col-md-6">
                    <h3 className="fs-5 mb-0">About US</h3>
                    <h1 className="display-6 mb-2">Who <b>We</b> Are</h1>
                    <hr className="w-50"/>
                    <p className="lead mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis cupiditate aperiam fugiat necessitatibus ea sapiente numquam natus hic labore quia Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore corporis, obcaecati eaque quo vel blanditiis expedita quasi? Accusamus nisi dolor, corporis illum ducimus velit repellendus iste est sunt possimus amet perspiciatis, porro quos quas asperiores. Nihil labore illo voluptatem ad, numquam, repellat dicta perferendis dolores laudantium deleniti obcaecati, quod veritatis maxime animi. Labore rem neque vel cum iste nisi ratione delectus, similique blanditiis commodi quos assumenda sapiente consequuntur unde id pariatur quasi ab tenetur quo.</p>
                    <button className="btn btn-primary rounded-pill px-4 py-2 ">Get Started</button>
                    <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</button>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}
