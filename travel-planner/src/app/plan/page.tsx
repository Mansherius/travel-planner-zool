"use client"
import React, { useEffect, useRef, useState } from "react";
import Banner from "../../components/second.page/banner/banner";
import Card from "../../components/second.page/card/card";
import Footer from "@/components/shared/Footer";
const cardData = [
  {
    uid:1,
    title: "Card 1",
    subtitle: "hdbf",
    imageUrl: "/images/second.page/img1.png",
    rating: 4.5,
    price: 50,
    type:"hotel",
    starCount: 3.5,
    description:
      "Certainly! Here’s alustrating agility and swiftness. Meanwhile, she sells seashells by the seashoret. One might wonder, how much wood would a woodchuck chuck if a woodchuck could chuck wood? Such whimsical thoughts remind us of Peter Piper, who picked a peck of pickled peppers. These sayings carry wisdom, like the reminder that a journey of a thousand miles begins with a single step, urging us to take action. To be or not to be, that is the question we all face at some point. We must remember that all that glitters is not gold, and while the early bird catches the worm, it’s important to seize opportunities. When life gives you lemons, make lemonade, embracing positivity in adversity. After all, practice makes perfect, encouraging us to strive for improvement in everything we do.",
  },
  {
    uid:2,
    title: "Card 2",
    subtitle: "hdbf",
    imageUrl: "/images/second.page/img2.png",
    rating: 3.0,
    price: 40,
    type:"restaurant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Integer aliquam purus a turpis condimentum, nec consectetur nibh tincidunt. Aenean non erat vel velit varius vehicula. Sed cursus magna vel orci sodales, in condimentum nunc efficitur. Fusce nec urna sit amet magna interdum pharetra. Duis ultricies ipsum et nunc facilisis, vel pharetra sapien sollicitudin. Maecenas tincidunt, purus id molestie fringilla, lectus erat suscipit est, nec cursus lorem urna a nunc. Praesent sit amet erat a justo lacinia aliquet. Phasellus ac ligula in odio fringilla feugiat. In id turpis sed quam blandit efficitur. Donec vel mi quam. Etiam fringilla ante a diam interdum, sed volutpat turpis congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur sit amet urna at nunc ullamcorper malesuada.",
  },
  {

    uid:3,
    title: "Card 3",
    subtitle: "hdbf",
    imageUrl: "/images/second.page/img3.png",
    rating: 3.5,
    price: 60,
    type:"location",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Integer aliquam purus a turpis condimentum, nec consectetur nibh tincidunt. Aenean non erat vel velit varius vehicula. Sed cursus magna vel orci sodales, in condimentum nunc efficitur. Fusce nec urna sit amet magna interdum pharetra. Duis ultricies ipsum et nunc facilisis, vel pharetra sapien sollicitudin. Maecenas tincidunt, purus id molestie fringilla, lectus erat suscipit est, nec cursus lorem urna a nunc. Praesent sit amet erat a justo lacinia aliquet. Phasellus ac ligula in odio fringilla feugiat. In id turpis sed quam blandit efficitur. Donec vel mi quam. Etiam fringilla ante a diam interdum, sed volutpat turpis congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur sit amet urna at nunc ullamcorper malesuada.",
  },
  {
    uid:4,
    title: "Card 4",
    subtitle: "hdbf",
    imageUrl: "/images/second.page/img4.png",
    rating: 4.5,
    price: 45,
    type:"hotel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Integer aliquam purus a turpis condimentum, nec consectetur nibh tincidunt. Aenean non erat vel velit varius vehicula. Sed cursus magna vel orci sodales, in condimentum nunc efficitur. Fusce nec urna sit amet magna interdum pharetra. Duis ultricies ipsum et nunc facilisis, vel pharetra sapien sollicitudin. Maecenas tincidunt, purus id molestie fringilla, lectus erat suscipit est, nec cursus lorem urna a nunc. Praesent sit amet erat a justo lacinia aliquet. Phasellus ac ligula in odio fringilla feugiat. In id turpis sed quam blandit efficitur. Donec vel mi quam. Etiam fringilla ante a diam interdum, sed volutpat turpis congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur sit amet urna at nunc ullamcorper malesuada.",
  },
  {
    uid:5,
    title: "Card 5",
    subtitle: "hdbf",
    imageUrl: "/images/second.page/img5.png",
    rating: 5.0,
    price: 55,
    type:"restaurant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Integer aliquam purus a turpis condimentum, nec consectetur nibh tincidunt. Aenean non erat vel velit varius vehicula. Sed cursus magna vel orci sodales, in condimentum nunc efficitur. Fusce nec urna sit amet magna interdum pharetra. Duis ultricies ipsum et nunc facilisis, vel pharetra sapien sollicitudin. Maecenas tincidunt, purus id molestie fringilla, lectus erat suscipit est, nec cursus lorem urna a nunc. Praesent sit amet erat a justo lacinia aliquet. Phasellus ac ligula in odio fringilla feugiat. In id turpis sed quam blandit efficitur. Donec vel mi quam. Etiam fringilla ante a diam interdum, sed volutpat turpis congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur sit amet urna at nunc ullamcorper malesuada.",
  },
  {
    uid:6,
    title: "Card 6",
    imageUrl: "/images/second.page/img6.png",
    rating: 4.0,
    price: 50,
    type:"location",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Integer aliquam purus a turpis condimentum, nec consectetur nibh tincidunt. Aenean non erat vel velit varius vehicula. Sed cursus magna vel orci sodales, in condimentum nunc efficitur. Fusce nec urna sit amet magna interdum pharetra. Duis ultricies ipsum et nunc facilisis, vel pharetra sapien sollicitudin. Maecenas tincidunt, purus id molestie fringilla, lectus erat suscipit est, nec cursus lorem urna a nunc. Praesent sit amet erat a justo lacinia aliquet. Phasellus ac ligula in odio fringilla feugiat. In id turpis sed quam blandit efficitur. Donec vel mi quam. Etiam fringilla ante a diam interdum, sed volutpat turpis congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur sit amet urna at nunc ullamcorper malesuada.",
  },
  {
    uid:7,
    title: "Card 7",
    imageUrl: "/images/second.page/img7.png",
    rating: 4.5,
    price: 50,
    type:"hotel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Integer aliquam purus a turpis condimentum, nec consectetur nibh tincidunt. Aenean non erat vel velit varius vehicula. Sed cursus magna vel orci sodales, in condimentum nunc efficitur. Fusce nec urna sit amet magna interdum pharetra. Duis ultricies ipsum et nunc facilisis, vel pharetra sapien sollicitudin. Maecenas tincidunt, purus id molestie fringilla, lectus erat suscipit est, nec cursus lorem urna a nunc. Praesent sit amet erat a justo lacinia aliquet. Phasellus ac ligula in odio fringilla feugiat. In id turpis sed quam blandit efficitur. Donec vel mi quam. Etiam fringilla ante a diam interdum, sed volutpat turpis congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur sit amet urna at nunc ullamcorper malesuada.",
  },
  {
    uid:8,
    title: "Card 8",
    imageUrl: "/images/second.page/img8.png",
    rating: 4.0,
    price: 40,
    type:"restaurant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Integer aliquam purus a turpis condimentum, nec consectetur nibh tincidunt. Aenean non erat vel velit varius vehicula. Sed cursus magna vel orci sodales, in condimentum nunc efficitur. Fusce nec urna sit amet magna interdum pharetra. Duis ultricies ipsum et nunc facilisis, vel pharetra sapien sollicitudin. Maecenas tincidunt, purus id molestie fringilla, lectus erat suscipit est, nec cursus lorem urna a nunc. Praesent sit amet erat a justo lacinia aliquet. Phasellus ac ligula in odio fringilla feugiat. In id turpis sed quam blandit efficitur. Donec vel mi quam. Etiam fringilla ante a diam interdum, sed volutpat turpis congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur sit amet urna at nunc ullamcorper malesuada.",
  },
  {
    uid:9,
    title: "Card 9",
    imageUrl: "/images/second.page/img9.png",
    rating: 3.5,
    price: 60,
    type:"location",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Integer aliquam purus a turpis condimentum, nec consectetur nibh tincidunt. Aenean non erat vel velit varius vehicula. Sed cursus magna vel orci sodales, in condimentum nunc efficitur. Fusce nec urna sit amet magna interdum pharetra. Duis ultricies ipsum et nunc facilisis, vel pharetra sapien sollicitudin. Maecenas tincidunt, purus id molestie fringilla, lectus erat suscipit est, nec cursus lorem urna a nunc. Praesent sit amet erat a justo lacinia aliquet. Phasellus ac ligula in odio fringilla feugiat. In id turpis sed quam blandit efficitur. Donec vel mi quam. Etiam fringilla ante a diam interdum, sed volutpat turpis congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur sit amet urna at nunc ullamcorper malesuada.",
  },
  {
    uid:10,
    title: "Card 10",
    imageUrl: "/images/second.page/img10.png",
    rating: 3.0,
    price: 45,
    type:"hotel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Integer aliquam purus a turpis condimentum, nec consectetur nibh tincidunt. Aenean non erat vel velit varius vehicula. Sed cursus magna vel orci sodales, in condimentum nunc efficitur. Fusce nec urna sit amet magna interdum pharetra. Duis ultricies ipsum et nunc facilisis, vel pharetra sapien sollicitudin. Maecenas tincidunt, purus id molestie fringilla, lectus erat suscipit est, nec cursus lorem urna a nunc. Praesent sit amet erat a justo lacinia aliquet. Phasellus ac ligula in odio fringilla feugiat. In id turpis sed quam blandit efficitur. Donec vel mi quam. Etiam fringilla ante a diam interdum, sed volutpat turpis congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur sit amet urna at nunc ullamcorper malesuada.",
  },
  {
    uid:11,
    title: "Card 11",
    imageUrl: "/images/second.page/img11.png",
    rating: 4.5,
    price: 55,
    type:"restaurant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Integer aliquam purus a turpis condimentum, nec consectetur nibh tincidunt. Aenean non erat vel velit varius vehicula. Sed cursus magna vel orci sodales, in condimentum nunc efficitur. Fusce nec urna sit amet magna interdum pharetra. Duis ultricies ipsum et nunc facilisis, vel pharetra sapien sollicitudin. Maecenas tincidunt, purus id molestie fringilla, lectus erat suscipit est, nec cursus lorem urna a nunc. Praesent sit amet erat a justo lacinia aliquet. Phasellus ac ligula in odio fringilla feugiat. In id turpis sed quam blandit efficitur. Donec vel mi quam. Etiam fringilla ante a diam interdum, sed volutpat turpis congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur sit amet urna at nunc ullamcorper malesuada.",
  },
  {
    uid:12,
    title: "Card 12",
    imageUrl: "/images/second.page/img12.png",
    rating: 4.0,
    price: 50,
    type:"location",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Integer aliquam purus a turpis condimentum, nec consectetur nibh tincidunt. Aenean non erat vel velit varius vehicula. Sed cursus magna vel orci sodales, in condimentum nunc efficitur. Fusce nec urna sit amet magna interdum pharetra. Duis ultricies ipsum et nunc facilisis, vel pharetra sapien sollicitudin. Maecenas tincidunt, purus id molestie fringilla, lectus erat suscipit est, nec cursus lorem urna a nunc. Praesent sit amet erat a justo lacinia aliquet. Phasellus ac ligula in odio fringilla feugiat. In id turpis sed quam blandit efficitur. Donec vel mi quam. Etiam fringilla ante a diam interdum, sed volutpat turpis congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur sit amet urna at nunc ullamcorper malesuada.",
  },
];
const SecondPage: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");
  const[cardCount,setCardCount]=useState<any>([])
  const [sortOrder, setSortOrder] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>(""); 
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    // Scroll to the selected card when `selectedCard` changes
    if (selectedCard !== null && cardRefs.current[selectedCard]) {
      cardRefs.current[selectedCard].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedCard]);

  const handleCardClick = (index: number) => {
    setSelectedCard(index);
  };
  
  const handleCloseClick:any = () => {
    setSelectedCard(null);
  };
  const cardAdd = (data: any) => {
    setCardCount([...cardCount,data])
  }
 
  const handleSearch = (query: string) => {
    const foundIndex = cardData.findIndex(
      (card) => card.title.toLowerCase() === query.toLowerCase()
    );
    if (foundIndex !== -1) {
      // Scroll to the found card
      cardRefs.current[foundIndex]?.scrollIntoView({ behavior: "smooth", block: "start" });
      setSelectedCard(foundIndex); // Select the card
    
    } else {
      alert("This place doesn't exist"); // Reset selection if not found
    }
    setSearchQuery("");
  };

  const handleTabChange = (tab: string) => {
    setFilter(tab);
  };

  const handleSortChange = (order: string) => {
    setSortOrder(order);
  };

  const filteredCardData = cardData.filter((card) => {
    if (filter === "All") return true;
    if (filter === "Tourist Attractions") return card.type === "location";
    if (filter === "Hotels") return card.type=== "hotel";
    if (filter === "Restaurants") return card.type === "restaurant";
    return true;
  });

  const sortedCardData = [...filteredCardData].sort((a, b) => {
    if (sortOrder === "lowToHigh") {
      return a.price - b.price;
    }
    if (sortOrder === "highToLow") {
      return b.price - a.price;
    }
    else{
      return 0;
    }
  });

  return (
    <div className="mx-auto min-h-screen">
      <Banner onSearch={handleSearch} onTabChange={handleTabChange} onSortChange={handleSortChange} cartCount={cardCount.length}/>
      <div className="flex-grow mt-8 pb-32 inset-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 sm:mx-10 xl:mx-[200px] justify-center items-center">
        {sortedCardData.map((data, index) => (
          <Card
            key={index}
            cardData={data}
            isSelected={selectedCard === index}
            onClick={() => handleCardClick(index)}
            onClose={handleCloseClick}
            onAdd={()=> cardAdd(data)}
          />
        ))}
      </div>
    </div>
  
  );
};

export default SecondPage;