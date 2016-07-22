import { Injectable } from '@angular/core';

@Injectable()
export class ExpenseCategoriesService {

    constructor() { }

    public categories = [
  {
    "expenseSubCategoryId": "APPLIANCES",
    "expenseCategoryId": "HOMEEXPENSES",
    "description": "Appliances"
  },
  {
    "expenseSubCategoryId": "AUTOINSURANCE",
    "expenseCategoryId": "TRANSPORTATION",
    "description": "Auto Insurance"
  },
  {
    "expenseSubCategoryId": "BANKFEES",
    "expenseCategoryId": "MISCELLANEOUS",
    "description": "Bank Fees"
  },
  {
    "expenseSubCategoryId": "BOOKS",
    "expenseCategoryId": "ENTERTAINMENT",
    "description": "Books"
  },
  {
    "expenseSubCategoryId": "BUS",
    "expenseCategoryId": "TRANSPORTATION",
    "description": "Bus"
  },
  {
    "expenseSubCategoryId": "CABLE",
    "expenseCategoryId": "HOMEEXPENSES",
    "description": "Cable/Satellite"
  },
  {
    "expenseSubCategoryId": "CHARITABLEDONATIONS",
    "expenseCategoryId": "CHARITY",
    "description": "Charitable Donations"
  },
  {
    "expenseSubCategoryId": "CLEANING",
    "expenseCategoryId": "DAILYLIVING",
    "description": "Cleaning"
  },
  {
    "expenseSubCategoryId": "CLOTHING",
    "expenseCategoryId": "DAILYLIVING",
    "description": "Clothing"
  },
  {
    "expenseSubCategoryId": "CONCERTS",
    "expenseCategoryId": "ENTERTAINMENT",
    "description": "Concerts"
  },
  {
    "expenseSubCategoryId": "DOCTOR",
    "expenseCategoryId": "HEALTH",
    "description": "Doctor"
  },
  {
    "expenseSubCategoryId": "DUES",
    "expenseCategoryId": "SUBSCRIPTIONS",
    "description": "Dues"
  },
  {
    "expenseSubCategoryId": "ELECTRICITY",
    "expenseCategoryId": "HOMEEXPENSES",
    "description": "Electricity"
  },
  {
    "expenseSubCategoryId": "FURNISHINGS",
    "expenseCategoryId": "HOMEEXPENSES",
    "description": "Furnishings"
  },
  {
    "expenseSubCategoryId": "GADGETS",
    "expenseCategoryId": "ENTERTAINMENT",
    "description": "Gadgets"
  },
  {
    "expenseSubCategoryId": "GAMES",
    "expenseCategoryId": "ENTERTAINMENT",
    "description": "Games"
  },
  {
    "expenseSubCategoryId": "GARDEN",
    "expenseCategoryId": "HOMEEXPENSES",
    "description": "Lawn/Garden"
  },
  {
    "expenseSubCategoryId": "GAS",
    "expenseCategoryId": "HOMEEXPENSES",
    "description": "Gas/Oil"
  },
  {
    "expenseSubCategoryId": "GIFTS",
    "expenseCategoryId": "CHARITY",
    "description": "GIFTS"
  },
  {
    "expenseSubCategoryId": "GROCERIES",
    "expenseCategoryId": "DAILYLIVING",
    "description": "Groceries"
  },
  {
    "expenseSubCategoryId": "HEALTHCLUBDUES",
    "expenseCategoryId": "HEALTH",
    "description": "Health Club Dues"
  },
  {
    "expenseSubCategoryId": "HEALTHINSURANCE",
    "expenseCategoryId": "HEALTH",
    "description": "Health Insurance"
  },
  {
    "expenseSubCategoryId": "HOMEINSURANCE",
    "expenseCategoryId": "HOMEEXPENSES",
    "description": "Home Insurance"
  },
  {
    "expenseSubCategoryId": "HOTEL",
    "expenseCategoryId": "ENTERTAINMENT",
    "description": "Hotel"
  },
  {
    "expenseSubCategoryId": "IMPROVEMENTS",
    "expenseCategoryId": "HOMEEXPENSES",
    "description": "Improvements"
  },
  {
    "expenseSubCategoryId": "INTERNET",
    "expenseCategoryId": "HOMEEXPENSES",
    "description": "Internet"
  },
  {
    "expenseSubCategoryId": "LICENSE",
    "expenseCategoryId": "TRANSPORTATION",
    "description": "License"
  },
  {
    "expenseSubCategoryId": "LIFEINSURANCE",
    "expenseCategoryId": "HEALTH",
    "description": "Life Insurance"
  },
  {
    "expenseSubCategoryId": "MAGAZINES",
    "expenseCategoryId": "SUBSCRIPTIONS",
    "description": "Magazines"
  },
  {
    "expenseSubCategoryId": "MAINTENANCE",
    "expenseCategoryId": "HOMEEXPENSES",
    "description": "Maintenance/Supplies"
  },
  {
    "expenseSubCategoryId": "MEDICINE",
    "expenseCategoryId": "HEALTH",
    "description": "Medicine/Drugs"
  },
  {
    "expenseSubCategoryId": "MEMBERSHIPS",
    "expenseCategoryId": "SUBSCRIPTIONS",
    "description": "Memberships"
  },
  {
    "expenseSubCategoryId": "MORTGAGE",
    "expenseCategoryId": "HOMEEXPENSES",
    "description": "Mortgage"
  },
  {
    "expenseSubCategoryId": "MUSIC",
    "expenseCategoryId": "ENTERTAINMENT",
    "description": "Music"
  },
  {
    "expenseSubCategoryId": "NEWSPAPER",
    "expenseCategoryId": "SUBSCRIPTIONS",
    "description": "News Paper"
  },
  {
    "expenseSubCategoryId": "OTHER",
    "expenseCategoryId": "HOMEEXPENSES",
    "description": "Other"
  },
  {
    "expenseSubCategoryId": "OUTDOORRECREATION",
    "expenseCategoryId": "ENTERTAINMENT",
    "description": "Outdoor Recreation"
  },
  {
    "expenseSubCategoryId": "PERSONALSUPPLIES",
    "expenseCategoryId": "DAILYLIVING",
    "description": "Personal Supplies"
  },
  {
    "expenseSubCategoryId": "PETFOOD",
    "expenseCategoryId": "DAILYLIVING",
    "description": "Pet Food"
  },
  {
    "expenseSubCategoryId": "PHONE",
    "expenseCategoryId": "HOMEEXPENSES",
    "description": "Phone"
  },
  {
    "expenseSubCategoryId": "PHOTOS",
    "expenseCategoryId": "ENTERTAINMENT",
    "description": "Photos"
  },
  {
    "expenseSubCategoryId": "POSTAGE",
    "expenseCategoryId": "MISCELLANEOUS",
    "description": "Postage"
  },
  {
    "expenseSubCategoryId": "REGISTRATION",
    "expenseCategoryId": "TRANSPORTATION",
    "description": "Registration"
  },
  {
    "expenseSubCategoryId": "RELIGIOUSDONATIONS",
    "expenseCategoryId": "CHARITY",
    "description": "Religious Donations"
  },
  {
    "expenseSubCategoryId": "RENT",
    "expenseCategoryId": "HOMEEXPENSES",
    "description": "Rent"
  },
  {
    "expenseSubCategoryId": "RENTALINSURANCE",
    "expenseCategoryId": "HOMEEXPENSES",
    "description": "Rental Insurance"
  },
  {
    "expenseSubCategoryId": "RENTALS",
    "expenseCategoryId": "ENTERTAINMENT",
    "description": "Rentals"
  },
  {
    "expenseSubCategoryId": "RESTAURANT",
    "expenseCategoryId": "DAILYLIVING",
    "description": "Restaurant"
  },
  {
    "expenseSubCategoryId": "SALON",
    "expenseCategoryId": "DAILYLIVING",
    "description": "Salon/Barber"
  },
  {
    "expenseSubCategoryId": "SEWER",
    "expenseCategoryId": "HOMEEXPENSES",
    "description": "Sewer"
  },
  {
    "expenseSubCategoryId": "SPORTS",
    "expenseCategoryId": "ENTERTAINMENT",
    "description": "Sports"
  },
  {
    "expenseSubCategoryId": "TAXI",
    "expenseCategoryId": "TRANSPORTATION",
    "description": "Taxi"
  },
  {
    "expenseSubCategoryId": "THEATER",
    "expenseCategoryId": "ENTERTAINMENT",
    "description": "Theater"
  },
  {
    "expenseSubCategoryId": "TOYS",
    "expenseCategoryId": "ENTERTAINMENT",
    "description": "Toys"
  },
  {
    "expenseSubCategoryId": "TRAINFARE",
    "expenseCategoryId": "TRANSPORTATION",
    "description": "Train Fare"
  },
  {
    "expenseSubCategoryId": "TRASH",
    "expenseCategoryId": "HOMEEXPENSES",
    "description": "Trash"
  },
  {
    "expenseSubCategoryId": "TRAVEL",
    "expenseCategoryId": "ENTERTAINMENT",
    "description": "Travel"
  },
  {
    "expenseSubCategoryId": "VEHICLEPAYMENTS",
    "expenseCategoryId": "TRANSPORTATION",
    "description": "Vehicle Payments"
  },
  {
    "expenseSubCategoryId": "VETERINARIAN",
    "expenseCategoryId": "HEALTH",
    "description": "Veterinarian/Pet Care"
  },
  {
    "expenseSubCategoryId": "VIDEOS",
    "expenseCategoryId": "ENTERTAINMENT",
    "description": "Videos"
  },
  {
    "expenseSubCategoryId": "WATER",
    "expenseCategoryId": "HOMEEXPENSES",
    "description": "Water"
  }
]
}