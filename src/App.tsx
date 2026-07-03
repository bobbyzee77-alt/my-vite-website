import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import KidsProgram from './pages/KidsProgram'
import AdultsProgram from './pages/AdultsProgram'
import MaleStudents from './pages/MaleStudents'
import FemaleStudents from './pages/FemaleStudents'
import Teachers from './pages/Teachers'
import Pricing from './pages/Pricing'
import Testimonials from './pages/Testimonials'
import FAQ from './pages/FAQ'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import BookTrial from './pages/BookTrial'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:slug" element={<CourseDetail />} />
        <Route path="/kids-program" element={<KidsProgram />} />
        <Route path="/adults-program" element={<AdultsProgram />} />
        <Route path="/male-students" element={<MaleStudents />} />
        <Route path="/female-students" element={<FemaleStudents />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/book-free-trial" element={<BookTrial />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
