System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var UnsubscriptionError;
    return {
        setters:[],
        execute: function() {
            /**
             * An error thrown when one or more errors have occurred during the
             * `unsubscribe` of a {@link Subscription}.
             */
            UnsubscriptionError = (function (_super) {
                __extends(UnsubscriptionError, _super);
                function UnsubscriptionError(errors) {
                    _super.call(this);
                    this.errors = errors;
                    this.name = 'UnsubscriptionError';
                    this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n') : '';
                }
                return UnsubscriptionError;
            }(Error));
            exports_1("UnsubscriptionError", UnsubscriptionError);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL3V0aWwvVW5zdWJzY3JpcHRpb25FcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7WUFBQTs7O2VBR0c7WUFDSDtnQkFBeUMsdUNBQUs7Z0JBQzVDLDZCQUFtQixNQUFhO29CQUM5QixpQkFBTyxDQUFDO29CQURTLFdBQU0sR0FBTixNQUFNLENBQU87b0JBRTlCLElBQUksQ0FBQyxJQUFJLEdBQUcscUJBQXFCLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxHQUFNLE1BQU0sQ0FBQyxNQUFNLGlEQUMxQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRyxFQUFFLENBQUMsSUFBSyxPQUFBLEVBQUcsQ0FBQyxHQUFHLENBQUMsV0FBSyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUUsRUFBN0IsQ0FBNkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUcsR0FBRyxFQUFFLENBQUM7Z0JBQ3hFLENBQUM7Z0JBQ0gsMEJBQUM7WUFBRCxDQVBBLEFBT0MsQ0FQd0MsS0FBSyxHQU83QztZQVBELHFEQU9DLENBQUEiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvdXRpbC9VbnN1YnNjcmlwdGlvbkVycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBbiBlcnJvciB0aHJvd24gd2hlbiBvbmUgb3IgbW9yZSBlcnJvcnMgaGF2ZSBvY2N1cnJlZCBkdXJpbmcgdGhlXG4gKiBgdW5zdWJzY3JpYmVgIG9mIGEge0BsaW5rIFN1YnNjcmlwdGlvbn0uXG4gKi9cbmV4cG9ydCBjbGFzcyBVbnN1YnNjcmlwdGlvbkVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZXJyb3JzOiBhbnlbXSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5uYW1lID0gJ1Vuc3Vic2NyaXB0aW9uRXJyb3InO1xuICAgIHRoaXMubWVzc2FnZSA9IGVycm9ycyA/IGAke2Vycm9ycy5sZW5ndGh9IGVycm9ycyBvY2N1cnJlZCBkdXJpbmcgdW5zdWJzY3JpcHRpb246XG4ke2Vycm9ycy5tYXAoKGVyciwgaSkgPT4gYCR7aSArIDF9KSAke2Vyci50b1N0cmluZygpfWApLmpvaW4oJ1xcbicpfWAgOiAnJztcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
