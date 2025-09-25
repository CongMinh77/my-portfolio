# Ví dụ sử dụng các component animation

Dưới đây là một ví dụ về cách sử dụng các component animation trong một trang Home:

```tsx
import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import AnimatedText from '../components/AnimatedText';
import AnimatedImage from '../components/AnimatedImage';
import AnimatedSection from '../components/AnimatedSection';

const Home = () => {
  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box sx={{ py: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <AnimatedSection direction="left" delay={0.2}>
              <AnimatedText
                text="Xin chào, tôi là"
                type="word"
                variant="h6"
                color="primary"
                gutterBottom
              />
              <AnimatedText
                text="Nguyễn Văn A"
                type="character"
                variant="h2"
                fontWeight="bold"
                delay={0.4}
                gutterBottom
              />
              <AnimatedText
                text="Frontend Developer & UI/UX Designer"
                type="word"
                variant="h5"
                color="text.secondary"
                delay={0.6}
                gutterBottom
                sx={{ mb: 3 }}
              />
              
              <Box sx={{ mt: 4 }}>
                <AnimatedSection direction="up" delay={0.8}>
                  <Button variant="contained" size="large" sx={{ mr: 2 }}>
                    Xem Portfolio
                  </Button>
                  <Button variant="outlined" size="large">
                    Liên hệ
                  </Button>
                </AnimatedSection>
              </Box>
            </AnimatedSection>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <AnimatedImage
              src="/path/to/profile-image.jpg"
              alt="Profile Image"
              effect="scale"
              delay={0.5}
              height={400}
              sx={{ borderRadius: 2 }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* About Section */}
      <Box sx={{ py: 8 }}>
        <AnimatedSection direction="up" delay={0.2}>
          <Typography variant="h3" gutterBottom>
            Về tôi
          </Typography>
          
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <AnimatedImage
                src="/path/to/about-image.jpg"
                alt="About Image"
                effect="fadeUp"
                delay={0.4}
                height={350}
                sx={{ borderRadius: 2 }}
              />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <AnimatedSection direction="right" delay={0.6}>
                <Typography variant="body1" paragraph>
                  Tôi là một Frontend Developer với hơn 5 năm kinh nghiệm trong việc xây dựng các ứng dụng web hiện đại và đáp ứng.
                </Typography>
                <Typography variant="body1" paragraph>
                  Tôi chuyên về React, TypeScript và các framework CSS hiện đại như Material-UI và Tailwind CSS.
                </Typography>
                <Typography variant="body1" paragraph>
                  Ngoài ra, tôi cũng có kinh nghiệm trong thiết kế UI/UX và làm việc với các công cụ như Figma và Adobe XD.
                </Typography>
              </AnimatedSection>
            </Grid>
          </Grid>
        </AnimatedSection>
      </Box>

      {/* Skills Section */}
      <Box sx={{ py: 8 }}>
        <AnimatedSection direction="up" delay={0.2}>
          <Typography variant="h3" gutterBottom>
            Kỹ năng
          </Typography>
          
          <Grid container spacing={3}>
            {skills.map((skill, index) => (
              <Grid item xs={6} sm={4} md={3} key={skill.name}>
                <AnimatedSection 
                  direction="up" 
                  delay={0.2 + index * 0.1}
                >
                  <Box
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      bgcolor: 'background.paper',
                      borderRadius: 2,
                      boxShadow: 1,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {skill.icon}
                    <Typography variant="h6" sx={{ mt: 2 }}>
                      {skill.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {skill.level}
                    </Typography>
                  </Box>
                </AnimatedSection>
              </Grid>
            ))}
          </Grid>
        </AnimatedSection>
      </Box>

      {/* Projects Section */}
      <Box sx={{ py: 8 }}>
        <AnimatedSection direction="up" delay={0.2}>
          <Typography variant="h3" gutterBottom>
            Dự án
          </Typography>
          
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={project.title}>
                <AnimatedSection 
                  direction="up" 
                  delay={0.3 + index * 0.1}
                >
                  <Box
                    sx={{
                      borderRadius: 2,
                      overflow: 'hidden',
                      boxShadow: 3,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <AnimatedImage
                      src={project.image}
                      alt={project.title}
                      effect="scale"
                      height={200}
                    />
                    <Box sx={{ p: 3, flexGrow: 1 }}>
                      <Typography variant="h5" gutterBottom>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {project.description}
                      </Typography>
                      <Box sx={{ mt: 'auto', pt: 2 }}>
                        <Button variant="outlined" size="small">
                          Xem chi tiết
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </AnimatedSection>
              </Grid>
            ))}
          </Grid>
        </AnimatedSection>
      </Box>

      {/* Contact Section */}
      <Box sx={{ py: 8 }}>
        <AnimatedSection direction="up" delay={0.2}>
          <Typography variant="h3" gutterBottom>
            Liên hệ
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <AnimatedSection direction="left" delay={0.4}>
                <Typography variant="body1" paragraph>
                  Bạn có dự án muốn thảo luận? Hãy liên hệ với tôi qua form bên cạnh hoặc các kênh dưới đây:
                </Typography>
                
                <Box sx={{ mt: 3 }}>
                  {contactInfo.map((item, index) => (
                    <Box 
                      key={item.label} 
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        mb: 2 
                      }}
                    >
                      <AnimatedSection direction="left" delay={0.5 + index * 0.1}>
                        {item.icon}
                        <Typography variant="body1" sx={{ ml: 2 }}>
                          {item.label}: {item.value}
                        </Typography>
                      </AnimatedSection>
                    </Box>
                  ))}
                </Box>
              </AnimatedSection>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <AnimatedSection direction="right" delay={0.4}>
                {/* Contact Form */}
                <Box
                  component="form"
                  sx={{
                    p: 3,
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    boxShadow: 1,
                  }}
                >
                  {/* Form fields */}
                </Box>
              </AnimatedSection>
            </Grid>
          </Grid>
        </AnimatedSection>
      </Box>
    </Container>
  );
};

// Dummy data for the example
const skills = [
  { name: 'React', level: 'Expert', icon: null },
  { name: 'TypeScript', level: 'Advanced', icon: null },
  { name: 'Material-UI', level: 'Advanced', icon: null },
  { name: 'Tailwind CSS', level: 'Intermediate', icon: null },
  { name: 'Next.js', level: 'Advanced', icon: null },
  { name: 'Redux', level: 'Advanced', icon: null },
  { name: 'GraphQL', level: 'Intermediate', icon: null },
  { name: 'Figma', level: 'Intermediate', icon: null },
];

const projects = [
  {
    title: 'E-commerce Website',
    description: 'A modern e-commerce website built with React and Node.js.',
    image: '/path/to/project1.jpg',
  },
  {
    title: 'Task Management App',
    description: 'A task management application with drag-and-drop functionality.',
    image: '/path/to/project2.jpg',
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with Next.js and Tailwind CSS.',
    image: '/path/to/project3.jpg',
  },
];

const contactInfo = [
  { label: 'Email', value: 'example@example.com', icon: null },
  { label: 'Phone', value: '+84 123 456 789', icon: null },
  { label: 'LinkedIn', value: 'linkedin.com/in/example', icon: null },
  { label: 'GitHub', value: 'github.com/example', icon: null },
];

export default Home;
```

## Lưu ý khi sử dụng các component animation

1. **Hiệu suất**: Khi sử dụng nhiều animation trên một trang, hãy đảm bảo rằng chúng không ảnh hưởng đến hiệu suất của trang. Sử dụng `viewport={{ once: true }}` để animation chỉ chạy một lần khi phần tử xuất hiện trong viewport.

2. **Trải nghiệm người dùng**: Không nên sử dụng quá nhiều animation phức tạp cùng một lúc, điều này có thể gây khó chịu cho người dùng.

3. **Responsive**: Đảm bảo rằng các animation hoạt động tốt trên cả thiết bị di động và desktop.

4. **Accessibility**: Một số người dùng có thể không thích animation hoặc bị ảnh hưởng bởi chúng (ví dụ: người bị chóng mặt). Hãy cân nhắc cung cấp tùy chọn để tắt animation.

5. **Thời gian delay**: Khi sử dụng nhiều animation với delay khác nhau, hãy đảm bảo rằng tổng thời gian delay không quá lâu, điều này có thể làm cho trang web cảm thấy chậm.

6. **Tương thích trình duyệt**: Đảm bảo rằng các animation hoạt động tốt trên tất cả các trình duyệt hiện đại.
