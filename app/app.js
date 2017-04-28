var myApp = angular.module("myApp",[])

    /**
     * cardsList directive/component
     * gets the initialized data from our service,
     * and saves to scope, uses us to pass along cards to fetch our cards list
     */
    .directive('cardsList', function(cardsService) {
        return {
            templateUrl: '/app/templates/cards-list.html',
            restrict: 'E',
            scope: {
                cards: '<'
            },
            controller: function($scope){
                $scope.cards = cardsService;
            }
        };
    })

    /**
     * card directive/component
     * use to represent the card details and kpis
     */
    .directive('card', function() {
        return {
            templateUrl: '/app/templates/card.html',
            restrict: 'E',
            scope: {
                card: '<'
            },
            controller: function($scope){
                /**
                 * showCard function,
                 * used to show a popup with the proper card + overlay element
                 * and attach event handler, for the overlay, in order to remove the popup
                 * @param card_id
                 */
                $scope.showCard = function(card_id) {
                    // creates a new overlay element
                    var overlay = angular.element('<div id="overlay"></div>');
                    angular.element(document.body).append(overlay);

                    // attach click event for the overlay element
                    document.getElementById("overlay").addEventListener("click", function() {
                        // remove popup + overlay
                        document.body.removeChild(document.getElementById("overlay"));
                        document.body.removeChild(document.getElementsByClassName("popup")[0]);
                    });

                    // creates a show of the card
                    var el = document.getElementById(card_id).cloneNode(true);
                    el.setAttribute("class", "card popup");
                    // append new card to body
                    angular.element(document.body).append(el);

                };
            }
        };
    })

    /**
     * kpis directive/component
     * use to represent the row off the card kpis/properties
     */
    .directive('kpis', function() {
        return {
            templateUrl: '/app/templates/kpis.html',
            restrict: 'E',
            scope: {
                props: '<'
            }
        };
    })

    /**
     * cardsHeader directive/component
     * use to represent our top header
     */
    .directive('cardsHeader', function() {
        return {
            templateUrl: '/app/templates/cards-header.html',
            restrict: 'E'
        };
    });
