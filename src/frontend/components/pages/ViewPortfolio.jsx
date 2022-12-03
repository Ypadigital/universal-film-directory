import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { useDataContext } from "../../contexts/dataContext";
import { CreateJob } from "../../services/jobService";
import { apiErrorMessage } from "../../utils/handleAPIErrors";
import { getRandomKey, sliderConfig } from "../../utils/helpers";
import toast from "../../utils/toast";
import Breadcrumb from "../Common/Breadcrumb";
import HireModal from "../Common/Modals/HireModal";

const ViewPortfolio = (props) => {
  const [isShowingHireModal, setisShowingHireModal] = useState(false);
  const { id } = useParams();
  let { services } = useDataContext();

  services = services.data || [];

  const service = services.find((service) => service._id === id) || null;
  console.log(service);

  const handleHire = async () => {
    const toastId = toast.loading("Creating job...");
    try {
      await CreateJob({ serviceId: service._id });
      toast.update(toastId, "Freelancer was just invited for this job");
    } catch (error) {
      const message = apiErrorMessage(error);
      toast.update(toastId, message, { type: "error" });
    }
  };
  
  return (
    <>
      {service && (
        <>
          <Breadcrumb title="Portfolio Overview" />
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <div className="pro-post widget-box" id="overview">
                    <h3 className="pro-title">{service.title}</h3>
                    <div className="pro-content">
                      <p>{service.overview}</p>
                      <div className="my-4">
                        <h4 className="widget-title">${service.rate.amount}</h4>
                        <span className="mb-0">
                          ( Per {service.rate.type} )
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          setisShowingHireModal(true);
                        }}
                        className="btn btn-primary submit-btn"
                      >
                        Hire Me Now
                      </button>
                    </div>
                  </div>
                  {/* link */}
                  <div className="pro-post widget-box post-widget">
                    <h3 className="pro-title">Project Link</h3>
                    {service.link ? (
                      <div className="pro-content">
                        <div className="form-group profile-group mb-0">
                          <div className="input-group">
                            <div className="form-control">
                              <a
                                rel="noopener noreferrer"
                                href={service.link}
                                target="_blank"
                              >
                                {service.link}
                              </a>
                            </div>

                            <div className="input-group-append">
                              <button
                                className="btn btn-success sub-btn"
                                type="submit"
                              >
                                <i className="fa fa-clone" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      "No link provided"
                    )}
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <Slider {...sliderConfig} className="developer-slider h-100">
                    {service.images.map((image, i) => (
                      <div key={getRandomKey()} className="w-100">
                        <img
                          src={image}
                          className="img-fluid w-100"
                          height={300}
                          alt=""
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          <HireModal
            onHire={() => {
              handleHire(service);
            }}
            isShowing={isShowingHireModal}
            setIsShowing={setisShowingHireModal}
          />
        </>
      )}
    </>
  );
};
export default ViewPortfolio;
