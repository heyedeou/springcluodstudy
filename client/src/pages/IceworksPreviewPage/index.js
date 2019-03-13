import React, { Component } from 'react';
import EnhanceTable from './components/EnhanceTable';
import OurTeam from './components/OurTeam';
import BrandShowCase from './components/BrandShowCase';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import ProductIntro from './components/ProductIntro';
import FeatureList from './components/FeatureList';
import BrandList from './components/BrandList';
import SimpleTestimonial99 from './components/SimpleTestimonial99';
import FooterInfo99 from './components/FooterInfo99';

export default class IceworksPreviewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="iceworks-preview-page-page">
        <EnhanceTable />
        <OurTeam />
        <BrandShowCase />
        <Testimonial />
        <Footer />
        <ProductIntro />
        <FeatureList />
        <BrandList />
        <SimpleTestimonial99 />
        <FooterInfo99 />
      </div>
    );
  }
}
