import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

// Import Images
import Breadcrumb from "../../Common/Breadcrumb";
import Filter from "../../Common/Filter";
import Rating from "../../Common/Ratings";
import { Select } from "../../Common/Select";
import {
  countries,
  getAverage,
  getFullName,
  getRandomKey,
  queryToJSON,
} from "../../../utils/helpers";
import { useCategoriesData } from "../../../hooks/useCategories";
import { useProfilesData } from "../../../hooks/useProfilesData";
import ReactStickyBox from "react-sticky-box";
import _ from "lodash";
import * as Yup from "yup";
import { useFormik } from "formik";
import toast from "../../../utils/toast";
import { apiErrorMessage } from "../../../utils/handleAPIErrors";
import { getFilteredProfiles } from "../../../services/profileService";
import { RegularInput } from "../../Common/RegularInput";
const validationSchema = Yup.object({
  keyword: Yup.string().label("Keyword"),
  category: Yup.string().label("Category"),
  location: Yup.string().label("Location"),
});

const Developer = (props) => {
  const router = useHistory();
  const [results, setresults] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const query = router.location.search || "";
  const init = queryToJSON(query);
  const { data: categories } = useCategoriesData();

  const emptyForm = {
    keyword: "",
    category: "",
    location: "",
  };
  const initialValues = {
    ...emptyForm,
    ...init,
  };

  const onSubmit = (values) => {
    let params = _.omitBy(values, (v) => !v);
    const query = new URLSearchParams(params);
    console.log(query);
    if (query.toString()) return router.push(`/freelancer?${query.toString()}`);
    router.push(`/freelancer`);
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const clearFilters = () => {
    formik.setValues({ ...emptyForm });
    router.push(`/freelancer`);
  };

  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });

  useEffect(() => {
    setisLoading(true);
    (async () => {
      try {
        const query = router.location.search.split("?")[1] || "";
        console.log({ query });
        const { data } = await getFilteredProfiles(query);
        const profiles = data.data;
        // console.log({ profiles });
        setresults(profiles);
      } catch (error) {
        toast.error(apiErrorMessage(error));
      } finally {
        setisLoading(false);
      }
    })();
  }, [router.location]);

  return (
    <>
      {
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
                <ReactStickyBox offsetTop={144} offsetBottom={20}>
                  {/* Search Filter */}
                  <form
                    className="card search-filter"
                    onSubmit={formik.handleSubmit}
                  >
                    <div className="card-header d-flex justify-content-between">
                      <h4 className="card-title mb-0">FILTERS</h4>
                      <button
                        type="button"
                        onClick={clearFilters}
                        className="clear"
                      >
                        Clear All
                      </button>
                    </div>
                    <div className="card-body">
                      <div className="filter-widget">
                        <div className="form-group">
                          <RegularInput
                            formik={formik}
                            label="Keywords"
                            placeholder="Enter any keyword"
                            name={"keyword"}
                          />
                        </div>
                      </div>

                      <div className="filter-widget">
                        <div className="form-group">
                          {!!categories.length ? (
                            <Select
                              label={"Category"}
                              placeholder="Select a Category"
                              formik={formik}
                              name="category"
                              className={"mb-4"}
                              // onChange={formik.handleChange("type")}
                            >
                              {categories.map((category) => (
                                <option key={category._id} value={category._id}>
                                  {category.name}
                                </option>
                              ))}
                            </Select>
                          ) : (
                            <p>No categories found</p>
                          )}
                        </div>
                      </div>

                      <div className="filter-widget">
                        <div className="form-group">
                          {!!countries.length ? (
                            <Select
                              label={"Location"}
                              placeholder="Select a Location"
                              formik={formik}
                              name="location"
                              className={"mb-4"}
                              // onChange={formik.handleChange("type")}
                            >
                              {countries.map((country) => (
                                <option key={country} value={country}>
                                  {country}
                                </option>
                              ))}
                            </Select>
                          ) : (
                            <p>No locations found</p>
                          )}
                        </div>
                      </div>

                      <div className="btn-search">
                        <button type="submit" className="btn btn-block">
                          Search
                        </button>
                      </div>
                    </div>
                  </form>
                  {/* /Search Filter */}
                </ReactStickyBox>
              </div>
              {isLoading && <div>Loading...</div>}
              {!isLoading && !!results.length && (
                <div className="col-md-12 col-lg-8 col-xl-9">
                  {/* <SortsTags /> */}
                  <div className="sort-tab">
                    <div className="row align-items-center">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="d-flex align-items-center">
                          <div className="freelance-view">
                            <h4>
                              Showing {results.length}{" "}
                              {`${results.length > 1 ? "results" : "result"}`}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    {results.map((freelancer) => (
                      <div
                        key={getRandomKey()}
                        className="col-md-6 col-lg-6 col-xl-4"
                      >
                        <div className="freelance-widget">
                          <div className="freelance-content">
                            <div className="freelance-img">
                              <img src={freelancer.user.image} alt="" />
                              <span className="verified">
                                <i className="fas fa-check-circle" />
                              </span>
                            </div>
                            <div className="freelance-info">
                              <h3>{getFullName(freelancer.user)}</h3>

                              <div className="freelance-specific">
                                {freelancer.descripton}
                              </div>
                              <div className="freelance-location">
                                <i className="fas fa-map-marker-alt me-1" />
                                {freelancer.location}
                              </div>
                              <div className="rating">
                                <Rating value={freelancer.rating} />
                                <span className="average-rating">
                                  {freelancer.rating} (
                                  {freelancer.ratings.length})
                                </span>
                              </div>
                              <div className="freelance-tags gap-10 d-flex justify-content-center">
                                {freelancer.categories
                                  .slice(0, 3)
                                  .map((category, index) => (
                                    <span
                                      key={getRandomKey()}
                                      className="badge badge-pill badge-design"
                                    >
                                      {category.name}
                                    </span>
                                  ))}
                              </div>
                            </div>
                          </div>
                          <div className="cart-hover">
                            <Link
                              to={`/freelancer/${freelancer._id}`}
                              className="btn-cart"
                              tabIndex={-1}
                            >
                              View Profile
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {!isLoading && !results.length && <div>No results found</div>}
            </div>
          </div>
        </div>
      }
      <Breadcrumb title="Freelancers" />
    </>
  );
};
export default Developer;
