import React from "react";

const Scrollreview = () => {
  return (
    <div className="flex flex-col space-y-20" Name="Testimonial">
      <div className="flex flex-col justify-start items-center gap-4">
        <div className="bg-slate-100 border border-gray rounded-l-full rounded-r-full p-2 px-4 flex justify-center items-center border-none">
          <p className="text-black font-semibold text-md light-ballon">
            They already love our products 😍
          </p>
        </div>
        <div>
          <p className="text-5xl font-extrabold text-zinc-800 heading-alignment">
            See what our users say about us
          </p>
        </div>
      </div>

      {/* slider cards */}
      <div className="space-y-7">
        {/* banner 1 */}

        <div className="slider">
          <div className="slide-track">
            <div className="feedback-cards">
              <div className="slide">
                <div className="feedback-top">
                  <div className="feedback-card-header">
                    <div className="feedback-card-owner">
                      <div className="feedback-card-image">
                        <img
                          src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                          alt=""
                        />
                      </div>
                      <div className="feedback-card-title">“Just love it”</div>
                    </div>
                    <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                  </div>
                  <div className="feedback-card-body">
                    This app has saved me so much time and stress! I used to
                    constantly forget important dates, but now I can stay on top
                    of everything. You should test it!
                  </div>
                </div>
                <div className="feedback-bottom">
                  <div className="feedback-card-footer">
                    <div className="feedback-footer-owner-name">
                      Sophie Devilan
                    </div>
                    <div className="feedback-footer-type">Entrepreneur</div>
                  </div>
                </div>
              </div>

              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “This great in work”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      I love how user-friendly this app is! It's so easy to add
                      events and set reminders, and it's made my life so much
                      more organized.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Ethan Williams
                      </div>
                      <div className="feedback-footer-type">Content Writer</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-top">
                  <div className="feedback-card-header">
                    <div className="feedback-card-owner">
                      <div className="feedback-card-image">
                        <img
                          src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                          alt=""
                        />
                      </div>
                      <div className="feedback-card-title">
                        “This very usefull”
                      </div>
                    </div>
                    <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                  </div>
                  <div className="feedback-card-body">
                    This calendar app has been a lifesaver! I used to forget
                    important events, but now I'm always on top of my schedule.
                  </div>
                </div>
                <div className="feedback-bottom">
                  <div className="feedback-card-footer">
                    <div className="feedback-footer-owner-name">
                      Olivia Taylor
                    </div>
                    <div className="feedback-footer-type">Fashion Designer</div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      Since I started using this app, I've saved so much time. I
                      no longer have to manually add appointments or set
                      reminders - it's all done for me!
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Jackson Anderson
                      </div>
                      <div className="feedback-footer-type">
                        Software Developer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Sophia Martinez
                      </div>
                      <div className="feedback-footer-type">Veterinarian</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Aiden Johnson
                      </div>
                      <div className="feedback-footer-type">Chef</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      I've tried a lot of calendar apps, but this one is by far
                      the best! It's so intuitive and customizable, and it has
                      all the features I need. Game changer!
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Emma Davis
                      </div>
                      <div className="feedback-footer-type">
                        Marketing Manager
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Mason Brown
                      </div>
                      <div className="feedback-footer-type">Astronomer</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Ava Wilson
                      </div>
                      <div className="feedback-footer-type">Electrician</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Logan Miller
                      </div>
                      <div className="feedback-footer-type">
                        Graphic Designer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Isabella Thompson
                      </div>
                      <div className="feedback-footer-type">
                        Nurse Practitioner
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Noah Garcia
                      </div>
                      <div className="feedback-footer-type">Archaeologist</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Grace Hernandez
                      </div>
                      <div className="feedback-footer-type">Firefighter</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Caleb White
                      </div>
                      <div className="feedback-footer-type">
                        Financial Analyst
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Lily Robinson
                      </div>
                      <div className="feedback-footer-type">
                        Physical Therapist
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Lucas Smith
                      </div>
                      <div className="feedback-footer-type">
                        Social Media Coordinator
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Mia Jones
                      </div>
                      <div className="feedback-footer-type">Pilot</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Wyatt Taylor
                      </div>
                      <div className="feedback-footer-type">Event Planner</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Harper Davis
                      </div>
                      <div className="feedback-footer-type">
                        Mechanical Engineer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/2fFFaPF5ZAByC4EYJKR5YVw5yw.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Benjamin Wright
                      </div>
                      <div className="feedback-footer-type">
                        Wedding Photographer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Abigail Harris
                      </div>
                      <div className="feedback-footer-type">
                        Biomedical Scientist
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Isabella Thompson
                      </div>
                      <div className="feedback-footer-type">Librarian</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Banner 2 */}
        <div className="slider">
          <div className="slide-track">
            <div className="feedback-cards">
              <div className="slide">
                <div className="feedback-top">
                  <div className="feedback-card-header">
                    <div className="feedback-card-owner">
                      <div className="feedback-card-image">
                        <img
                          src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                          alt=""
                        />
                      </div>
                      <div className="feedback-card-title">“Just love it”</div>
                    </div>
                    <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                  </div>
                  <div className="feedback-card-body">
                    This app has saved me so much time and stress! I used to
                    constantly forget important dates, but now I can stay on top
                    of everything. You should test it!
                  </div>
                </div>
                <div className="feedback-bottom">
                  <div className="feedback-card-footer">
                    <div className="feedback-footer-owner-name">
                      Sophie Devilan
                    </div>
                    <div className="feedback-footer-type">Entrepreneur</div>
                  </div>
                </div>
              </div>

              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “This great in work”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      I love how user-friendly this app is! It's so easy to add
                      events and set reminders, and it's made my life so much
                      more organized.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Ethan Williams
                      </div>
                      <div className="feedback-footer-type">Content Writer</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-top">
                  <div className="feedback-card-header">
                    <div className="feedback-card-owner">
                      <div className="feedback-card-image">
                        <img
                          src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                          alt=""
                        />
                      </div>
                      <div className="feedback-card-title">
                        “This very usefull”
                      </div>
                    </div>
                    <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                  </div>
                  <div className="feedback-card-body">
                    This calendar app has been a lifesaver! I used to forget
                    important events, but now I'm always on top of my schedule.
                  </div>
                </div>
                <div className="feedback-bottom">
                  <div className="feedback-card-footer">
                    <div className="feedback-footer-owner-name">
                      Olivia Taylor
                    </div>
                    <div className="feedback-footer-type">Fashion Designer</div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      Since I started using this app, I've saved so much time. I
                      no longer have to manually add appointments or set
                      reminders - it's all done for me!
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Jackson Anderson
                      </div>
                      <div className="feedback-footer-type">
                        Software Developer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Sophia Martinez
                      </div>
                      <div className="feedback-footer-type">Veterinarian</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Aiden Johnson
                      </div>
                      <div className="feedback-footer-type">Chef</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      I've tried a lot of calendar apps, but this one is by far
                      the best! It's so intuitive and customizable, and it has
                      all the features I need. Game changer!
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Emma Davis
                      </div>
                      <div className="feedback-footer-type">
                        Marketing Manager
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Mason Brown
                      </div>
                      <div className="feedback-footer-type">Astronomer</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Ava Wilson
                      </div>
                      <div className="feedback-footer-type">Electrician</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Logan Miller
                      </div>
                      <div className="feedback-footer-type">
                        Graphic Designer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Isabella Thompson
                      </div>
                      <div className="feedback-footer-type">
                        Nurse Practitioner
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Noah Garcia
                      </div>
                      <div className="feedback-footer-type">Archaeologist</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Grace Hernandez
                      </div>
                      <div className="feedback-footer-type">Firefighter</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Caleb White
                      </div>
                      <div className="feedback-footer-type">
                        Financial Analyst
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Lily Robinson
                      </div>
                      <div className="feedback-footer-type">
                        Physical Therapist
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Lucas Smith
                      </div>
                      <div className="feedback-footer-type">
                        Social Media Coordinator
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Mia Jones
                      </div>
                      <div className="feedback-footer-type">Pilot</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Wyatt Taylor
                      </div>
                      <div className="feedback-footer-type">Event Planner</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Harper Davis
                      </div>
                      <div className="feedback-footer-type">
                        Mechanical Engineer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/2fFFaPF5ZAByC4EYJKR5YVw5yw.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Benjamin Wright
                      </div>
                      <div className="feedback-footer-type">
                        Wedding Photographer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Abigail Harris
                      </div>
                      <div className="feedback-footer-type">
                        Biomedical Scientist
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Isabella Thompson
                      </div>
                      <div className="feedback-footer-type">Librarian</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Banner 3 */}
        <div className="slider">
          <div className="slide-track">
            <div className="feedback-cards">
              <div className="slide">
                <div className="feedback-top">
                  <div className="feedback-card-header">
                    <div className="feedback-card-owner">
                      <div className="feedback-card-image">
                        <img
                          src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                          alt=""
                        />
                      </div>
                      <div className="feedback-card-title">“Just love it”</div>
                    </div>
                    <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                  </div>
                  <div className="feedback-card-body">
                    This app has saved me so much time and stress! I used to
                    constantly forget important dates, but now I can stay on top
                    of everything. You should test it!
                  </div>
                </div>
                <div className="feedback-bottom">
                  <div className="feedback-card-footer">
                    <div className="feedback-footer-owner-name">
                      Sophie Devilan
                    </div>
                    <div className="feedback-footer-type">Entrepreneur</div>
                  </div>
                </div>
              </div>

              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “This great in work”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      I love how user-friendly this app is! It's so easy to add
                      events and set reminders, and it's made my life so much
                      more organized.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Ethan Williams
                      </div>
                      <div className="feedback-footer-type">Content Writer</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-top">
                  <div className="feedback-card-header">
                    <div className="feedback-card-owner">
                      <div className="feedback-card-image">
                        <img
                          src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                          alt=""
                        />
                      </div>
                      <div className="feedback-card-title">
                        “This very usefull”
                      </div>
                    </div>
                    <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                  </div>
                  <div className="feedback-card-body">
                    This calendar app has been a lifesaver! I used to forget
                    important events, but now I'm always on top of my schedule.
                  </div>
                </div>
                <div className="feedback-bottom">
                  <div className="feedback-card-footer">
                    <div className="feedback-footer-owner-name">
                      Olivia Taylor
                    </div>
                    <div className="feedback-footer-type">Fashion Designer</div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      Since I started using this app, I've saved so much time. I
                      no longer have to manually add appointments or set
                      reminders - it's all done for me!
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Jackson Anderson
                      </div>
                      <div className="feedback-footer-type">
                        Software Developer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Sophia Martinez
                      </div>
                      <div className="feedback-footer-type">Veterinarian</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Aiden Johnson
                      </div>
                      <div className="feedback-footer-type">Chef</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      I've tried a lot of calendar apps, but this one is by far
                      the best! It's so intuitive and customizable, and it has
                      all the features I need. Game changer!
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Emma Davis
                      </div>
                      <div className="feedback-footer-type">
                        Marketing Manager
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Mason Brown
                      </div>
                      <div className="feedback-footer-type">Astronomer</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Ava Wilson
                      </div>
                      <div className="feedback-footer-type">Electrician</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Logan Miller
                      </div>
                      <div className="feedback-footer-type">
                        Graphic Designer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Isabella Thompson
                      </div>
                      <div className="feedback-footer-type">
                        Nurse Practitioner
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Noah Garcia
                      </div>
                      <div className="feedback-footer-type">Archaeologist</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Grace Hernandez
                      </div>
                      <div className="feedback-footer-type">Firefighter</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Caleb White
                      </div>
                      <div className="feedback-footer-type">
                        Financial Analyst
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Lily Robinson
                      </div>
                      <div className="feedback-footer-type">
                        Physical Therapist
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Lucas Smith
                      </div>
                      <div className="feedback-footer-type">
                        Social Media Coordinator
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Mia Jones
                      </div>
                      <div className="feedback-footer-type">Pilot</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Wyatt Taylor
                      </div>
                      <div className="feedback-footer-type">Event Planner</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Harper Davis
                      </div>
                      <div className="feedback-footer-type">
                        Mechanical Engineer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/2fFFaPF5ZAByC4EYJKR5YVw5yw.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Benjamin Wright
                      </div>
                      <div className="feedback-footer-type">
                        Wedding Photographer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Abigail Harris
                      </div>
                      <div className="feedback-footer-type">
                        Biomedical Scientist
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="feedback-card-header">
                      <div className="feedback-card-owner">
                        <div className="feedback-card-image">
                          <img
                            src="https://framerusercontent.com/images/OE9bY7VmHaJNicG3Xf3xtAyeRDo.png"
                            alt=""
                          />
                        </div>
                        <div className="feedback-card-title">
                          “Just love it”
                        </div>
                      </div>
                      <div className="feedback-card-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="feedback-card-body">
                      This calendar app has been a lifesaver! I used to forget
                      important events, but now I'm always on top of my
                      schedule.
                    </div>
                  </div>
                  <div className="feedback-bottom">
                    <div className="feedback-card-footer">
                      <div className="feedback-footer-owner-name">
                        Isabella Thompson
                      </div>
                      <div className="feedback-footer-type">Librarian</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scrollreview;
