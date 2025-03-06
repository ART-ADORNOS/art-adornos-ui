from django.urls import path
from Apps.store.views import RegisterStartupView, IndustryListView, UserStartupsListView, StartupUpdateView, \
    StartupDeleteView

app_name = 'store'
urlpatterns = []

urlpatterns += [
    #Api
    path('api/industry-choices/', IndustryListView.as_view(), name='industry-choices'),

    # Startup
    path('startups/register/', RegisterStartupView.as_view(), name='register_startup'),
    path('api/startups/list/', UserStartupsListView.as_view(), name='get_startup'),
    path('api/startups/update/<int:startup_id>/', StartupUpdateView.as_view(), name='update_startup'),
    path('api/startups/delete/<int:startup_id>/', StartupDeleteView.as_view(), name='delete_startup'),

]
