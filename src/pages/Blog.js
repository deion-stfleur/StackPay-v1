import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";


function Blog() {



    const articles = [
        {
          img: 'https://images.unsplash.com/photo-1600425426513-3edab55ddaab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D',
          title: 'Top Budget-Friendly Destinations for Travel Enthusiasts',
          category: 'Traveling',
          description: 'Explore the world\'s most affordable travel spots that offer amazing experiences on a budget...'
        },
        {
          img: 'https://images.unsplash.com/photo-1536662788222-6927ce05daea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2F2aW5nc3xlbnwwfDF8MHx8fDA%3D',
          title: 'Smart Savings Tips for Frequent Travelers',
          category: 'Smart Savings',
          description: 'Find out how to save on flights, accommodations, and experiences while traveling frequently...'
        }, {
            img: 'https://images.unsplash.com/photo-1643818657367-491080baeece?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFtaWx5fGVufDB8MXwwfHx8MA%3D%3D',
            title: "Guide to Building a Financial Plan for Your Family",
            category: "Finance",
            description: "Creating a sound financial plan is essential for family stability. Learn how to set goals, budget effectively, and invest wisely to secure your family's financial future."
          }, {
            img: 'https://images.unsplash.com/photo-1621261027519-a71ac66d5a68?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbiUyMGRlc2lnbmVyfGVufDB8MXwwfHx8MA%3D%3D',
            title: 'Styling on a Budget: Fashion Tips for Different Incomes',
            category: 'Choosing Style',
            description: "Discover how to dress stylishly without breaking the bank. From thrifting to savvy shopping, learn how to find fashionable pieces that suit different budgets and tastes."
        },  {
            img: 'https://images.unsplash.com/photo-1574260031597-bcd9eb192b4f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHRyYXZlbHxlbnwwfDF8MHx8fDA%3D',
            title: "Essential Travel Insurance: What You Need to Know",
            category: "Traveling",
            description: "Travel insurance can protect you from unexpected events. Understand the different types of coverage available and how to choose the best policy for your trip."
          },
          {
            img: 'https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNhdmluZ3N8ZW58MHwxfDB8fHww',
            title: "Creating a Savings Plan: Strategies for Success",
            category: "Smart Savings",
            description: "A comprehensive guide to creating a savings plan that works for you. Learn how to prioritize your goals, track your progress, and stay motivated to achieve your financial dreams."
          },
          {
            img: 'https://images.unsplash.com/photo-1633454301558-0adccf60386c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNyZWRpdCUyMGNhcmR8ZW58MHwxfDB8fHww',
            title: "Navigating the World of Credit Cards: Tips and Tricks",
            category: "Finance",
            description: "Credit cards can be powerful financial tools when used wisely. Learn how to choose the right card, manage your credit, and maximize rewards while avoiding debt."
          },
          {
            img: 'https://images.unsplash.com/photo-1615920292619-d7ff7ce76d50?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFtaWx5JTIwdHJhdmVsfGVufDB8MXwwfHx8MA%3D%3D',
            title: "Family-Friendly Travel Destinations: Where to Go and What to Do",
            category: "Family",
            description: "Plan a memorable family vacation with these top travel destinations and activities. From amusement parks to cultural experiences, find something for everyone in your family."
          },
          {
            img: 'https://plus.unsplash.com/premium_photo-1682090817099-705e0206a895?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGJ1ZGdldHxlbnwwfDF8MHx8fDA%3D',
            title: "Luxury on a Budget: How to Shop Smart and Stylish",
            category: "Shopping",
            description: "Discover how to achieve luxury style without overspending. Learn where to find designer deals, how to shop off-season, and other tricks to enjoy luxury fashion for less."
          },
          {
            img: 'https://plus.unsplash.com/premium_photo-1682090817099-705e0206a895?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGJ1ZGdldHxlbnwwfDF8MHx8fDA%3D',
            title: "Travel Hacks: Saving Money on Flights, Hotels, and More",
            category: "Traveling",
            description: "Unlock the secrets to saving on your next trip. Learn how to find the best flight deals, negotiate hotel rates, and make the most of your travel budget."
          },
          {
            img: 'https://images.unsplash.com/photo-1587613863965-74d82b39ef79?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3R1ZHl8ZW58MHwxfDB8fHww',
            title: "Effective Budgeting for Singles and Young Professionals",
            category: "Finance",
            description: "Craft a personal budget that works for your lifestyle and goals. This guide offers practical tips on budgeting, saving, and planning for a secure financial future."
          },
          {
            img: 'https://images.unsplash.com/photo-1575279099331-ab1894fc7b97?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHNob3BwaW5nfGVufDB8MXwwfHx8MA%3D%3D',
            title: "Smart Shopping Tips for Families on a Budget",
            category: "Shopping",
            description: "Families can stretch their budgets with smart shopping strategies. Discover how to find deals on groceries, clothing, and household items while maintaining quality."
          },
          {
            img: 'https://images.unsplash.com/photo-1635207947975-eb0b69ecfde7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxlY28lMjBmcmllbmRseXxlbnwwfDF8MHx8fDA%3D',
            title: "Eco-Friendly Fashion: Sustainable Choices for Every Budget",
            category: "Choosing Style",
            description: "Learn how to build an eco-friendly wardrobe without breaking the bank. From ethical brands to thrifting, find sustainable fashion options for every budget."
          },
          {
            img: 'https://images.unsplash.com/photo-1506787497326-c2736dde1bef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmluYW5jZXxlbnwwfDF8MHx8fDA%3D',
            title: "Making the Most of Loyalty Programs: Travel, Shopping, and Finance",
            category: "Smart Savings",
            description: "Maximize the benefits of loyalty programs across various areas of your life. Learn how to earn and redeem points effectively for travel, shopping, and finance."
          },
          {
            img: 'https://images.unsplash.com/photo-1564758913551-7212727c4b08?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWF0aW5nfGVufDB8MXwwfHx8MA%3D%3D',
            title: "Culinary Adventures: Best Foodie Destinations Around the World",
            category: "Traveling",
            description: "Embark on a culinary journey to some of the world's best foodie destinations. From street food to gourmet experiences, discover places that will satisfy your taste buds."
          }
    ];

    
    const Article = ({ article }) => {
        return (
            <div className='art-icle-container'>

                <div className='art-icle-col'>
                <img src={article.img} alt={article.title} className='blog-img-main' />
                
                <div className='art-icl-mn'>
                <h2>{article.title}</h2>
                <p className='art-cat'>{article.category}</p>
                <p>{article.description}</p>

                <div className='rm0re0-row'>
                <Link className='rm0re-link' to={`/article/${encodeURIComponent(article.title)}`}>
                            Read more
                  </Link>

                  <FaAngleRight />
                </div>
                </div>
                </div>
            </div>
        );
    };

    return (
        <div className='blg-ht'>
            <p className='blg-h1'>Blog</p>
            <p className='blg-copy'>Spill with Stack</p>

            <div className='main-onbd-blog-comp'>
              <div className='main-onbd-blog-container'>
                <img src="https://images.unsplash.com/photo-1503945438517-f65904a52ce6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGJsb2d8ZW58MHwwfDB8fHww"  />

                <div className='main-con-blog'>
                <p className='mcb-h1'>Welcome to StackPay: Your Go-To Solution for Managing Group Expenses!</p>
                <p className='mcb-copy'>Let's take you on a quick journey to explore all the amazing features of StackPay and how you can use them to manage your expenses effortlessly and help streamilne all your purchases.</p>
                <p className='mcb-time'>5 min read</p>
                <Link to="/article/onboarding-blog" style={{color: 'black'}}>
                    <p className='mcb-rmore'>Read More</p>
                </Link>
                </div>
              
              </div>
            </div>

            <div className="article-list">
                {articles.map((article, index) => (
                    // Use the index as the key if there is no unique identifier in the data
                    <Article key={index} article={article} />
                ))}
            </div>
        </div>
    );
}

export default Blog;
