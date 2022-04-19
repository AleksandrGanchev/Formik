import { Formik } from "formik";
import { productFormInitialValues } from "../../_constants/productForm.constants";
import { yupProductFormValidation } from "../../_helpers/validation/productForm.scheme";
import { Box, Button } from "@mui/material";

import OrganizeSection from "../../_section/OrganizeSection/OrganizeSection";
import PricesSection from "../../_section/PricesSection/PricesSection";
import ProductSection from "../../_section/ProductSection";
import { useState } from "react";

const ProductForm = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlerNext = () => {
    if (currentPage <= 1) {
      let currentCount = currentPage;
      currentCount++;
      setCurrentPage(currentCount);
    }
  };

  const handlerPrev = () => {
    if (currentPage <= 2 && currentPage > 0) {
      let currentCount = currentPage;
      currentCount--;
      setCurrentPage(currentCount);
    }
  };

  const renderSection = (formikProps) => {
    switch (currentPage) {
      case 0:
        return <ProductSection formikProps={formikProps} />;
      case 1:
        return <PricesSection formikProps={formikProps} />;
      case 2:
        return <OrganizeSection formikProps={formikProps} />;
    }
  };

  return (
    <div className="product-form__wrapper">
      <Formik
        initialValues={productFormInitialValues}
        validationSchema={yupProductFormValidation}
        onSubmit={(values, formikHelpers) => {
          try {
            console.log(values);
          } catch (err) {
            console.log(err);
          }
        }}
      >
        {(formikProps) => (
          <form onSubmit={formikProps.handleSubmit}>
            {renderSection(formikProps)}

            <Box mt={3} className="product-form__button">
              <Box mr={2}>
                <Button variant="contained" color="primary" onClick={handlerPrev}>
                  Prev
                </Button>
              </Box>
              <Box mr={3}>
                <Button variant="contained" color="primary" onClick={handlerNext}>
                  Next
                </Button>
              </Box>
              <Box>{currentPage + 1} / 3</Box>
            </Box>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ProductForm;
