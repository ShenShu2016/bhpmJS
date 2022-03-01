/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      categoryName
      auctionItems {
        items {
          id
          name
          title
          description
          categoryID
          imgUrl
          imgUrls
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      categoryName
      auctionItems {
        items {
          id
          name
          title
          description
          categoryID
          imgUrl
          imgUrls
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      categoryName
      auctionItems {
        items {
          id
          name
          title
          description
          categoryID
          imgUrl
          imgUrls
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAuctions = /* GraphQL */ `
  subscription OnCreateAuctions {
    onCreateAuctions {
      id
      company
      description
      auctionStartDate
      auctionEndDate
      lots {
        items {
          id
          lot
          startingPrice
          estimatedPriceMin
          estimatedPriceMax
          lotsStatus
          auctionsID
          auctionItemID
          auctionStatus
          createdAt
          updatedAt
        }
        nextToken
      }
      bidItemHistories {
        items {
          id
          bidPrice
          auctionsID
          lotsID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAuctions = /* GraphQL */ `
  subscription OnUpdateAuctions {
    onUpdateAuctions {
      id
      company
      description
      auctionStartDate
      auctionEndDate
      lots {
        items {
          id
          lot
          startingPrice
          estimatedPriceMin
          estimatedPriceMax
          lotsStatus
          auctionsID
          auctionItemID
          auctionStatus
          createdAt
          updatedAt
        }
        nextToken
      }
      bidItemHistories {
        items {
          id
          bidPrice
          auctionsID
          lotsID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAuctions = /* GraphQL */ `
  subscription OnDeleteAuctions {
    onDeleteAuctions {
      id
      company
      description
      auctionStartDate
      auctionEndDate
      lots {
        items {
          id
          lot
          startingPrice
          estimatedPriceMin
          estimatedPriceMax
          lotsStatus
          auctionsID
          auctionItemID
          auctionStatus
          createdAt
          updatedAt
        }
        nextToken
      }
      bidItemHistories {
        items {
          id
          bidPrice
          auctionsID
          lotsID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLots = /* GraphQL */ `
  subscription OnCreateLots {
    onCreateLots {
      id
      lot
      startingPrice
      estimatedPriceMin
      estimatedPriceMax
      lotsStatus
      auctionsID
      auctions {
        id
        company
        description
        auctionStartDate
        auctionEndDate
        lots {
          nextToken
        }
        bidItemHistories {
          nextToken
        }
        createdAt
        updatedAt
      }
      auctionItemID
      auctionItem {
        id
        name
        title
        description
        categoryID
        category {
          id
          categoryName
          createdAt
          updatedAt
        }
        imgUrl
        imgUrls
        createdAt
        updatedAt
      }
      bidItemHistories {
        items {
          id
          bidPrice
          auctionsID
          lotsID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      auctionStatus
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLots = /* GraphQL */ `
  subscription OnUpdateLots {
    onUpdateLots {
      id
      lot
      startingPrice
      estimatedPriceMin
      estimatedPriceMax
      lotsStatus
      auctionsID
      auctions {
        id
        company
        description
        auctionStartDate
        auctionEndDate
        lots {
          nextToken
        }
        bidItemHistories {
          nextToken
        }
        createdAt
        updatedAt
      }
      auctionItemID
      auctionItem {
        id
        name
        title
        description
        categoryID
        category {
          id
          categoryName
          createdAt
          updatedAt
        }
        imgUrl
        imgUrls
        createdAt
        updatedAt
      }
      bidItemHistories {
        items {
          id
          bidPrice
          auctionsID
          lotsID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      auctionStatus
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLots = /* GraphQL */ `
  subscription OnDeleteLots {
    onDeleteLots {
      id
      lot
      startingPrice
      estimatedPriceMin
      estimatedPriceMax
      lotsStatus
      auctionsID
      auctions {
        id
        company
        description
        auctionStartDate
        auctionEndDate
        lots {
          nextToken
        }
        bidItemHistories {
          nextToken
        }
        createdAt
        updatedAt
      }
      auctionItemID
      auctionItem {
        id
        name
        title
        description
        categoryID
        category {
          id
          categoryName
          createdAt
          updatedAt
        }
        imgUrl
        imgUrls
        createdAt
        updatedAt
      }
      bidItemHistories {
        items {
          id
          bidPrice
          auctionsID
          lotsID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      auctionStatus
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAuctionItem = /* GraphQL */ `
  subscription OnCreateAuctionItem {
    onCreateAuctionItem {
      id
      name
      title
      description
      categoryID
      category {
        id
        categoryName
        auctionItems {
          nextToken
        }
        createdAt
        updatedAt
      }
      imgUrl
      imgUrls
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAuctionItem = /* GraphQL */ `
  subscription OnUpdateAuctionItem {
    onUpdateAuctionItem {
      id
      name
      title
      description
      categoryID
      category {
        id
        categoryName
        auctionItems {
          nextToken
        }
        createdAt
        updatedAt
      }
      imgUrl
      imgUrls
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAuctionItem = /* GraphQL */ `
  subscription OnDeleteAuctionItem {
    onDeleteAuctionItem {
      id
      name
      title
      description
      categoryID
      category {
        id
        categoryName
        auctionItems {
          nextToken
        }
        createdAt
        updatedAt
      }
      imgUrl
      imgUrls
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBidItemHistory = /* GraphQL */ `
  subscription OnCreateBidItemHistory {
    onCreateBidItemHistory {
      id
      bidPrice
      auctionsID
      lotsID
      lots {
        id
        lot
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateBidItemHistory = /* GraphQL */ `
  subscription OnUpdateBidItemHistory($owner: String) {
    onUpdateBidItemHistory(owner: $owner) {
      id
      bidPrice
      auctionsID
      auctions {
        id
        company
        description
        auctionStartDate
        auctionEndDate
        lots {
          nextToken
        }
        bidItemHistories {
          nextToken
        }
        createdAt
        updatedAt
      }
      lotsID
      lots {
        id
        lot
        startingPrice
        estimatedPriceMin
        estimatedPriceMax
        lotsStatus
        auctionsID
        auctions {
          id
          company
          description
          auctionStartDate
          auctionEndDate
          createdAt
          updatedAt
        }
        auctionItemID
        auctionItem {
          id
          name
          title
          description
          categoryID
          imgUrl
          imgUrls
          createdAt
          updatedAt
        }
        bidItemHistories {
          nextToken
        }
        auctionStatus
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteBidItemHistory = /* GraphQL */ `
  subscription OnDeleteBidItemHistory($owner: String) {
    onDeleteBidItemHistory(owner: $owner) {
      id
      bidPrice
      auctionsID
      auctions {
        id
        company
        description
        auctionStartDate
        auctionEndDate
        lots {
          nextToken
        }
        bidItemHistories {
          nextToken
        }
        createdAt
        updatedAt
      }
      lotsID
      lots {
        id
        lot
        startingPrice
        estimatedPriceMin
        estimatedPriceMax
        lotsStatus
        auctionsID
        auctions {
          id
          company
          description
          auctionStartDate
          auctionEndDate
          createdAt
          updatedAt
        }
        auctionItemID
        auctionItem {
          id
          name
          title
          description
          categoryID
          imgUrl
          imgUrls
          createdAt
          updatedAt
        }
        bidItemHistories {
          nextToken
        }
        auctionStatus
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
