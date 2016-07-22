System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ExpenseCategoriesService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let ExpenseCategoriesService = class ExpenseCategoriesService {
                constructor() {
                    this.categories = [
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
                    ];
                }
            };
            ExpenseCategoriesService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [])
            ], ExpenseCategoriesService);
            exports_1("ExpenseCategoriesService", ExpenseCategoriesService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVuc2UvZXhwZW5zZUNhdGVnb3JpZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUVJO29CQUVPLGVBQVUsR0FBRzt3QkFDdEI7NEJBQ0Usc0JBQXNCLEVBQUUsWUFBWTs0QkFDcEMsbUJBQW1CLEVBQUUsY0FBYzs0QkFDbkMsYUFBYSxFQUFFLFlBQVk7eUJBQzVCO3dCQUNEOzRCQUNFLHNCQUFzQixFQUFFLGVBQWU7NEJBQ3ZDLG1CQUFtQixFQUFFLGdCQUFnQjs0QkFDckMsYUFBYSxFQUFFLGdCQUFnQjt5QkFDaEM7d0JBQ0Q7NEJBQ0Usc0JBQXNCLEVBQUUsVUFBVTs0QkFDbEMsbUJBQW1CLEVBQUUsZUFBZTs0QkFDcEMsYUFBYSxFQUFFLFdBQVc7eUJBQzNCO3dCQUNEOzRCQUNFLHNCQUFzQixFQUFFLE9BQU87NEJBQy9CLG1CQUFtQixFQUFFLGVBQWU7NEJBQ3BDLGFBQWEsRUFBRSxPQUFPO3lCQUN2Qjt3QkFDRDs0QkFDRSxzQkFBc0IsRUFBRSxLQUFLOzRCQUM3QixtQkFBbUIsRUFBRSxnQkFBZ0I7NEJBQ3JDLGFBQWEsRUFBRSxLQUFLO3lCQUNyQjt3QkFDRDs0QkFDRSxzQkFBc0IsRUFBRSxPQUFPOzRCQUMvQixtQkFBbUIsRUFBRSxjQUFjOzRCQUNuQyxhQUFhLEVBQUUsaUJBQWlCO3lCQUNqQzt3QkFDRDs0QkFDRSxzQkFBc0IsRUFBRSxxQkFBcUI7NEJBQzdDLG1CQUFtQixFQUFFLFNBQVM7NEJBQzlCLGFBQWEsRUFBRSxzQkFBc0I7eUJBQ3RDO3dCQUNEOzRCQUNFLHNCQUFzQixFQUFFLFVBQVU7NEJBQ2xDLG1CQUFtQixFQUFFLGFBQWE7NEJBQ2xDLGFBQWEsRUFBRSxVQUFVO3lCQUMxQjt3QkFDRDs0QkFDRSxzQkFBc0IsRUFBRSxVQUFVOzRCQUNsQyxtQkFBbUIsRUFBRSxhQUFhOzRCQUNsQyxhQUFhLEVBQUUsVUFBVTt5QkFDMUI7d0JBQ0Q7NEJBQ0Usc0JB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ZTs0QkFDcEMsYUFBYSxFQUFFLFNBQVM7eUJBQ3pCO3dCQUNEOzRCQUNFLHNCQUFzQixFQUFFLE1BQU07NEJBQzlCLG1CQUFtQixFQUFFLGVBQWU7NEJBQ3BDLGFBQWEsRUFBRSxNQUFNO3lCQUN0Qjt3QkFDRDs0QkFDRSxzQkFBc0IsRUFBRSxXQUFXOzRCQUNuQyxtQkFBbUIsRUFBRSxnQkFBZ0I7NEJBQ3JDLGFBQWEsRUFBRSxZQUFZO3lCQUM1Qjt3QkFDRDs0QkFDRSxzQkFBc0IsRUFBRSxPQUFPOzRCQUMvQixtQkFBbUIsRUFBRSxjQUFjOzRCQUNuQyxhQUFhLEVBQUUsT0FBTzt5QkFDdkI7d0JBQ0Q7NEJBQ0Usc0JBQXNCLEVBQUUsUUFBUTs0QkFDaEMsbUJBQW1CLEVBQUUsZUFBZTs0QkFDcEMsYUFBYSxFQUFFLFFBQVE7eUJBQ3hCO3dCQUNEOzRCQUNFLHNCQUFzQixFQUFFLGlCQUFpQjs0QkFDekMsbUJBQW1CLEVBQUUsZ0JBQWdCOzRCQUNyQyxhQUFhLEVBQUUsa0JBQWtCO3lCQUNsQzt3QkFDRDs0QkFDRSxzQkFBc0IsRUFBRSxjQUFjOzRCQUN0QyxtQkFBbUIsRUFBRSxRQUFROzRCQUM3QixhQUFhLEVBQUUsdUJBQXVCO3lCQUN2Qzt3QkFDRDs0QkFDRSxzQkFBc0IsRUFBRSxRQUFROzRCQUNoQyxtQkFBbUIsRUFBRSxlQUFlOzRCQUNwQyxhQUFhLEVBQUUsUUFBUTt5QkFDeEI7d0JBQ0Q7NEJBQ0Usc0JBQXNCLEVBQUUsT0FBTzs0QkFDL0IsbUJBQW1CLEVBQUUsY0FBYzs0QkFDbkMsYUFBYSxFQUFFLE9BQU87eUJBQ3ZCO3FCQUNGLENBQUE7Z0JBcFRtQixDQUFDO1lBcVRyQixDQUFDO1lBeFREO2dCQUFDLGlCQUFVLEVBQUU7O3dDQUFBO1lBQ2IsK0RBdVRDLENBQUEiLCJmaWxlIjoiZXhwZW5zZS9leHBlbnNlQ2F0ZWdvcmllcy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRXhwZW5zZUNhdGVnb3JpZXNTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIHB1YmxpYyBjYXRlZ29yaWVzID0gW1xyXG4gIHtcclxuICAgIFwiZXhwZW5zZVN1YkNhdGVnb3J5SWRcIjogXCJBUFBMSUFOQ0VTXCIsXHJcbiAgICBcImV4cGVuc2VDYXRlZ29yeUlkXCI6IFwiSE9NRUVYUEVOU0VTXCIsXHJcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQXBwbGlhbmNlc1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImV4cGVuc2VTdWJDYXRlZ29yeUlkXCI6IFwiQVVUT0lOU1VSQU5DRVwiLFxyXG4gICAgXCJleHBlbnNlQ2F0ZWdvcnlJZFwiOiBcIlRSQU5TUE9SVEFUSU9OXCIsXHJcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQXV0byBJbnN1cmFuY2VcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJleHBlbnNlU3ViQ2F0ZWdvcnlJZFwiOiBcIkJBTktGRUVTXCIsXHJcbiAgICBcImV4cGVuc2VDYXRlZ29yeUlkXCI6IFwiTUlTQ0VMTEFORU9VU1wiLFxyXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkJhbmsgRmVlc1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImV4cGVuc2VTdWJDYXRlZ29yeUlkXCI6IFwiQk9PS1NcIixcclxuICAgIFwiZXhwZW5zZUNhdGVnb3J5SWRcIjogXCJFTlRFUlRBSU5NRU5UXCIsXHJcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQm9va3NcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJleHBlbnNlU3ViQ2F0ZWdvcnlJZFwiOiBcIkJVU1wiLFxyXG4gICAgXCJleHBlbnNlQ2F0ZWdvcnlJZFwiOiBcIlRSQU5TUE9SVEFUSU9OXCIsXHJcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQnVzXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiZXhwZW5zZVN1YkNhdGVnb3J5SWRcIjogXCJDQUJMRVwiLFxyXG4gICAgXCJleHBlbnNlQ2F0ZWdvcnlJZFwiOiBcIkhPTUVFWFBFTlNFU1wiLFxyXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkNhYmxlL1NhdGVsbGl0ZVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImV4cGVuc2VTdWJDYXRlZ29yeUlkXCI6IFwiQ0hBUklUQUJMRURPTkFUSU9OU1wiLFxyXG4gICAgXCJleHBlbnNlQ2F0ZWdvcnlJZFwiOiBcIkNIQVJJVFlcIixcclxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJDaGFyaXRhYmxlIERvbmF0aW9uc1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImV4cGVuc2VTdWJDYXRlZ29yeUlkXCI6IFwiQ0xFQU5JTkdcIixcclxuICAgIFwiZXhwZW5zZUNhdGVnb3J5SWRcIjogXCJEQUlMWUxJVklOR1wiLFxyXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkNsZWFuaW5nXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiZXhwZW5zZVN1YkNhdGVnb3J5SWRcIjogXCJDTE9USElOR1wiLFxyXG4gICAgXCJleHBlbnNlQ2F0ZWdvcnlJZFwiOiBcIkRBSUxZTElWSU5HXCIsXHJcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ2xvdGhpbmdcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJleHBlbnNlU3ViQ2F0ZWdvcnlJZFwiOiBcIkNPTkNFUlRTXCIsXHJcbiAgICBcImV4cGVuc2VDYXRlZ29yeUlkXCI6IFwiRU5URVJUQUlOTUVOVFwiLFxyXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkNvbmNlcnRzXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiZXhwZW5zZVN1YkNhdGVnb3J5SWRcIjogXCJET0NUT1JcIixcclxuICAgIFwiZXhwZW5zZUNhdGVnb3J5SWRcIjogXCJIRUFMVEhcIixcclxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJEb2N0b3JcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJleHBlbnNlU3ViQ2F0ZWdvcnlJZFwiOiBcIkRVRVNcIixcclxuICAgIFwiZXhwZW5zZUNhdGVnb3J5SWRcIjogXCJTVUJTQ1JJUFRJT05TXCIsXHJcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiRHVlc1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImV4cGVuc2VTdWJDYXRlZ29yeUlkXCI6IFwiRUxFQ1RSSUNJVFlcIixcclxuICAgIFwiZXhwZW5zZUNhdGVnb3J5SWRcIjogXCJIT01FRVhQRU5TRVNcIixcclxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJFbGVjdHJpY2l0eVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImV4cGVuc2VTdWJDYXRlZ29yeUlkXCI6IFwiRlVSTklTSElOR1NcIixcclxuICAgIFwiZXhwZW5zZUNhdGVnb3J5SWRcIjogXCJIT01FRVhQRU5TRVNcIixcclxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJGdXJuaXNoaW5nc1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImV4cGVuc2VTdWJDYXRlZ29yeUlkXCI6IFwiR0FER0VUU1wiLFxyXG4gICAgXCJleHBlbnNlQ2F0ZWdvcnlJZFwiOiBcIkVOVEVSVEFJTk1FTlRcIixcclxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJHYWRnZXRzXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiZXhwZW5zZVN1YkNhdGVnb3J5SWRcIjogXCJHQU1FU1wiLFxyXG4gICAgXCJleHBlbnNlQ2F0ZWdvcnlJZFwiOiBcIkVOVEVSVEFJTk1FTlRcIixcclxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJHYW1lc1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImV4cGVuc2VTdWJDYXRlZ29yeUlkXCI6IFwiR0FSREVOXCIsXHJcbiAgICBcImV4cGVuc2VDYXRlZ29yeUlkXCI6IFwiSE9NRUVYUEVOU0VTXCIsXHJcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTGF3bi9HYXJkZW5cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJleHBlbnNlU3ViQ2F0ZWdvcnlJZFwiOiBcIkdBU1wiLFxyXG4gICAgXCJleHBlbnNlQ2F0ZWdvcnlJZFwiOiBcIkhPTUVFWFBFTlNFU1wiLFxyXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkdhcy9PaWxcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJleHBlbnNlU3ViQ2F0ZWdvcnlJZFwiOiBcIkdJRlRTXCIsXHJcbiAgICBcImV4cGVuc2VDYXRlZ29yeUlkXCI6IFwiQ0hBUklUWVwiLFxyXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkdJRlRTXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiZXhwZW5zZVN1YkNhdGVnb3J5SWRcIjogXCJHUk9DRVJJRVNcIixcclxuICAgIFwiZXhwZW5zZUNhdGVnb3J5SWRcIjogXCJEQUlMWUxJVklOR1wiLFxyXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkdyb2Nlcmllc1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImV4cGVuc2VTdWJDYXRlZ29yeUlkXCI6IFwiSEVBTFRIQ0xVQkRVRVNcIixcclxuICAgIFwiZXhwZW5zZUNhdGVnb3J5SWRcIjogXCJIRUFMVEhcIixcclxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJIZWFsdGggQ2x1YiBEdWVzXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiZXhwZW5zZVN1YkNhdGVnb3J5SWRcIjogXCJIRUFMVEhJTlNVUkFOQ0VcIixcclxuICAgIFwiZXhwZW5zZUNhdGVnb3J5SWRcIjogXCJIRUFMVEhcIixcclxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJIZWFsdGggSW5zdXJhbmNlXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiZXhwZW5zZVN1YkNhdGVnb3J5SWRcIjogXCJIT01FSU5TVVJBTkNFXCIsXHJcbiAgICBcImV4cGVuc2VDYXRlZ29yeUlkXCI6IFwiSE9NRUVYUEVOU0VTXCIsXHJcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiSG9tZSBJbnN1cmFuY2VcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJleHBlbnNlU3ViQ2F0ZWdvcnlJZFwiOiBcIkhPVEVMXCIsXHJcbiAgICBcImV4cGVuc2VDYXRlZ29yeUlkXCI6IFwiRU5URVJUQUlOTUVOVFwiLFxyXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkhvdGVsXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiZXhwZW5zZVN1YkNhdGVnb3J5SWRcIjogXCJJTVBST1ZFTUVOVFNcIixcclxuICAgIFwiZXhwZW5zZUNhdGVnb3J5SWRcIjogXCJIT01FRVhQRU5TRVNcIixcclxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJJbXByb3ZlbWVudHNcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJleHBlbnNlU3ViQ2F0ZWdvcnlJZFwiOiBcIklOVEVSTkVUXCIsXHJcbiAgICBcImV4cGVuc2VDYXRlZ29yeUlkXCI6IFwiSE9NRUVYUEVOU0VTXCIsXHJcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiSW50ZXJuZXRcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJleHBlbnNlU3ViQ2F0ZWdvcnlJZFwiOiBcIkxJQ0VOU0VcIixcclxuICAgIFwiZXhwZW5zZUNhdGVnb3J5SWRcIjogXCJUUkFOU1BPUlRBVElPTlwiLFxyXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxpY2Vuc2VcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJleHBlbnNlU3ViQ2F0ZWdvcnlJZFwiOiBcIkxJRkVJTlNVUkFOQ0VcIixcclxuICAgIFwiZXhwZW5zZUNhdGVnb3J5SWRcIjogXCJIRUFMVEhcIixcclxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMaWZlIEluc3VyYW5jZVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImV4cGVuc2VTdWJDYXRlZ29yeUlkXCI6IFwiTUFHQVpJTkVTXCIsXHJcbiAgICBcImV4cGVuc2VDYXRlZ29yeUlkXCI6IFwiU1VCU0NSSVBUSU9OU1wiLFxyXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIk1hZ2F6aW5lc1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImV4cGVuc2VTdWJDYXRlZ29yeUlkXCI6IFwiTUFJTlRFTkFOQ0VcIixcclxuICAgIFwiZXhwZW5zZUNhdGVnb3J5SWRcIjogXCJIT01FRVhQRU5TRVNcIixcclxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJNYWludGVuYW5jZS9TdXBwbGllc1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImV4cGVuc2VTdWJDYXRlZ29yeUlkXCI6IFwiTUVESUNJTkVcIixcclxuICAgIFwiZXhwZW5zZUNhdGVnb3J5SWRcIjogXCJIRUFMVEhcIixcclxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJNZWRpY2luZS9EcnVnc1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImV4cGVuc2VTdWJDYXRlZ29yeUlkXCI6IFwiTUVNQkVSU0hJUFNcIixcclxuICAgIFwiZXhwZW5zZUNhdGVnb3J5SWRcIjogXCJTVUJTQ1JJUFRJT05TXCIsXHJcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTWVtYmVyc2hpcHNcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJleHBlbnNlU3ViQ2F0ZWdvcnlJZFwiOiBcIk1PUlRHQUdFXCIsXHJcbiAgICBcImV4cGVuc2VDYXRlZ29yeUlkXCI6IFwiSE9NRUVYUEVOU0VTXCIsXHJcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTW9ydGdhZ2VcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJleHBlbnNlU3ViQ2F0ZWdvcnlJZFwiOiBcIk1VU0lDXCIsXHJcbiAgICBcImV4cGVuc2VDYXRlZ29yeUlkXCI6IFwiRU5URVJUQUlOTUVOVFwiLFxyXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIk11c2ljXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiZXhwZW5zZVN1YkNhdGVnb3J5SWRcIjogXCJORVdTUEFQRVJcIixcclxuICAgIFwiZXhwZW5zZUNhdGVnb3J5SWRcIjogXCJTVUJTQ1JJUFRJT05TXCIsXHJcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTmV3cyBQYXBlclwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImV4cGVuc2VTdWJDYXRlZ29yeUlkXCI6IFwiT1RIRVJcIixcclxuICAgIFwiZXhwZW5zZUNhdGVnb3J5SWRcIjogXCJIT01FRVhQRU5TRVNcIixcclxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJPdGhlclwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImV4cGVuc2VTdWJDYXRlZ29yeUlkXCI6IFwiT1VURE9PUlJFQ1JFQVRJT05cIixcclxuICAgIFwiZXhwZW5zZUNhdGVnb3J5SWRcIjogXCJFTlRFUlRBSU5NRU5UXCIsXHJcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiT3V0ZG9vciBSZWNyZWF0aW9uXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiZXhwZW5zZVN1YkNhdGVnb3J5SWRcIjogXCJQRVJTT05BTFNVUFBMSUVTXCIsXHJcbiAgICBcImV4cGVuc2VDYXRlZ29yeUlkXCI6IFwiREFJTFlMSVZJTkdcIixcclxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJQZXJzb25hbCBTdXBwbGllc1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImV4cGVuc2VTdWJDYXRlZ29yeUlkXCI6IFwiUEVURk9PRFwiLFxyXG4gICAgXCJleHBlbnNlQ2F0ZWdvcnlJZFwiOiBcIkRBSUxZTElWSU5HXCIsXHJcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiUGV0IEZvb2RcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJleHBlbnNlU3ViQ2F0ZWdvcnlJZFwiOiBcIlBIT05FXCIsXHJcbiAgICBcImV4cGVuc2VDYXRlZ29yeUlkXCI6IFwiSE9NRUVYUEVOU0VTXCIsXHJcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiUGhvbmVcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJleHBlbnNlU3ViQ2F0ZWdvcnlJZFwiOiBcIlBIT1RPU1wiLFxyXG4gICAgXCJleHBlbnNlQ2F0ZWdvcnlJZFwiOiBcIkVOVEVSVEFJTk1FTlRcIixcclxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJQaG90b3NcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJleHBlbnNlU3ViQ2F0ZWdvcnlJZFwiOiBcIlBPU1RBR0VcIixcclxuICAgIFwiZXhwZW5zZUNhdGVnb3J5SWRcIjogXCJNSVNDRUxMQU5FT1VTXCIsXHJcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiUG9zdGFnZVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImV4cGVuc2VTdWJDYXRlZ29yeUlkXCI6IFwiUkVHSVNUUkFUSU9OXCIsXHJcbiAgICBcImV4cGVuc2VDYXRlZ29yeUlkXCI6IFwiVFJBTlNQT1JUQVRJT05cIixcclxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJSZWdpc3RyYXRpb25cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJleHBlbnNlU3ViQ2F0ZWdvcnlJZFwiOiBcIlJFTElHSU9VU0RPTkFUSU9OU1wiLFxyXG4gICAgXCJleHBlbnNlQ2F0ZWdvcnlJZFwiOiBcIkNIQVJJVFlcIixcclxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJSZWxpZ2lvdXMgRG9uYXRpb25zXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiZXhwZW5zZVN1YkNhdGVnb3J5SWRcIjogXCJSRU5UXCIsXHJcbiAgICBcImV4cGVuc2VDYXRlZ29yeUlkXCI6IFwiSE9NRUVYUEVOU0VTXCIsXHJcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiUmVudFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImV4cGVuc2VTdWJDYXRlZ29yeUlkXCI6IFwiUkVOVEFMSU5TVVJBTkNFXCIsXHJcbiAgICBcImV4cGVuc2VDYXRlZ29yeUlkXCI6IFwiSE9NRUVYUEVOU0VTXCIsXHJcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiUmVudGFsIEluc3VyYW5jZVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImV4cGVuc2VTdWJDYXRlZ29yeUlkXCI6IFwiUkVOVEFMU1wiLFxyXG4gICAgXCJleHBlbnNlQ2F0ZWdvcnlJZFwiOiBcIkVOVEVSVEFJTk1FTlRcIixcclxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJSZW50YWxzXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiZXhwZW5zZVN1YkNhdGVnb3J5SWRcIjogXCJSRVNUQVVSQU5UXCIsXHJcbiAgICBcImV4cGVuc2VDYXRlZ29yeUlkXCI6IFwiREFJTFlMSVZJTkdcIixcclxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJSZXN0YXVyYW50XCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiZXhwZW5zZVN1YkNhdGVnb3J5SWRcIjogXCJTQUxPTlwiLFxyXG4gICAgXCJleHBlbnNlQ2F0ZWdvcnlJZFwiOiBcIkRBSUxZTElWSU5HXCIsXHJcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiU2Fsb24vQmFyYmVyXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiZXhwZW5zZVN1YkNhdGVnb3J5SWRcIjogXCJTRVdFUlwiLFxyXG4gICAgXCJleHBlbnNlQ2F0ZWdvcnlJZFwiOiBcIkhPTUVFWFBFTlNFU1wiLFxyXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlNld2VyXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiZXhwZW5zZVN1YkNhdGVnb3J5SWRcIjogXCJTUE9SVFNcIixcclxuICAgIFwiZXhwZW5zZUNhdGVnb3J5SWRcIjogXCJFTlRFUlRBSU5NRU5UXCIsXHJcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiU3BvcnRzXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiZXhwZW5zZVN1YkNhdGVnb3J5SWRcIjogXCJUQVhJXCIsXHJcbiAgICBcImV4cGVuc2VDYXRlZ29yeUlkXCI6IFwiVFJBTlNQT1JUQVRJT05cIixcclxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJUYXhpXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiZXhwZW5zZVN1YkNhdGVnb3J5SWRcIjogXCJUSEVBVEVSXCIsXHJcbiAgICBcImV4cGVuc2VDYXRlZ29yeUlkXCI6IFwiRU5URVJUQUlOTUVOVFwiLFxyXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZWF0ZXJcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJleHBlbnNlU3ViQ2F0ZWdvcnlJZFwiOiBcIlRPWVNcIixcclxuICAgIFwiZXhwZW5zZUNhdGVnb3J5SWRcIjogXCJFTlRFUlRBSU5NRU5UXCIsXHJcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiVG95c1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImV4cGVuc2VTdWJDYXRlZ29yeUlkXCI6IFwiVFJBSU5GQVJFXCIsXHJcbiAgICBcImV4cGVuc2VDYXRlZ29yeUlkXCI6IFwiVFJBTlNQT1JUQVRJT05cIixcclxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJUcmFpbiBGYXJlXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiZXhwZW5zZVN1YkNhdGVnb3J5SWRcIjogXCJUUkFTSFwiLFxyXG4gICAgXCJleHBlbnNlQ2F0ZWdvcnlJZFwiOiBcIkhPTUVFWFBFTlNFU1wiLFxyXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlRyYXNoXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiZXhwZW5zZVN1YkNhdGVnb3J5SWRcIjogXCJUUkFWRUxcIixcclxuICAgIFwiZXhwZW5zZUNhdGVnb3J5SWRcIjogXCJFTlRFUlRBSU5NRU5UXCIsXHJcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiVHJhdmVsXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiZXhwZW5zZVN1YkNhdGVnb3J5SWRcIjogXCJWRUhJQ0xFUEFZTUVOVFNcIixcclxuICAgIFwiZXhwZW5zZUNhdGVnb3J5SWRcIjogXCJUUkFOU1BPUlRBVElPTlwiLFxyXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlZlaGljbGUgUGF5bWVudHNcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJleHBlbnNlU3ViQ2F0ZWdvcnlJZFwiOiBcIlZFVEVSSU5BUklBTlwiLFxyXG4gICAgXCJleHBlbnNlQ2F0ZWdvcnlJZFwiOiBcIkhFQUxUSFwiLFxyXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlZldGVyaW5hcmlhbi9QZXQgQ2FyZVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImV4cGVuc2VTdWJDYXRlZ29yeUlkXCI6IFwiVklERU9TXCIsXHJcbiAgICBcImV4cGVuc2VDYXRlZ29yeUlkXCI6IFwiRU5URVJUQUlOTUVOVFwiLFxyXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlZpZGVvc1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImV4cGVuc2VTdWJDYXRlZ29yeUlkXCI6IFwiV0FURVJcIixcclxuICAgIFwiZXhwZW5zZUNhdGVnb3J5SWRcIjogXCJIT01FRVhQRU5TRVNcIixcclxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJXYXRlclwiXHJcbiAgfVxyXG5dXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
