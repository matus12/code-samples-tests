# DocSection: test_codename_ab82dcm6cv
require 'delivery-sdk-ruby'

delivery_client = KenticoCloud::Delivery::DeliveryClient.new project_id: '975bf280-fd91-488c-994c-2f04416e5ee3'
delivery_client.item('on_roasts')
               .request_latest_content
               .execute do |response|
                 item = response.item
               end
ruby code sample_6Y22bSAMI4
# EndDocSection